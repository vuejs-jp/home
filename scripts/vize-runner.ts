// FIXME:
// The npm-published Vize CLI still exposes `lint` only. Once upstream ships a
// first-party `vize check` command in the npm CLI, remove this runner and call
// the official command directly from package.json.

import { globSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { relative, resolve } from "node:path";

import { loadConfig } from "vize";

interface TypeCheckDiagnostic {
  severity: string;
  message: string;
  start: number;
  end: number;
  code?: string;
  help?: string;
}

interface TypeCheckOptions {
  filename?: string;
  strict?: boolean;
  includeVirtualTs?: boolean;
  checkProps?: boolean;
  checkEmits?: boolean;
  checkTemplateBindings?: boolean;
}

interface TypeCheckResult {
  diagnostics: TypeCheckDiagnostic[];
  errorCount: number;
  warningCount: number;
  virtualTs?: string;
}

interface VizeNativeModule {
  typeCheck(source: string, options?: TypeCheckOptions): TypeCheckResult;
}

interface CheckCliOptions {
  patterns: string[];
  quiet: boolean;
  showVirtualTs: boolean;
  strict?: boolean;
}

interface RunnerVizeConfig {
  typeChecker?: {
    enabled?: boolean;
    strict?: boolean;
    checkProps?: boolean;
    checkEmits?: boolean;
    checkTemplateBindings?: boolean;
  };
}

const require = createRequire(import.meta.url);
const vizeNative = require("@vizejs/native") as VizeNativeModule;
const args = process.argv.slice(2);
const command = args[0];

function parseCheckArgs(rawArgs: string[]): CheckCliOptions {
  const options: CheckCliOptions = {
    patterns: [],
    quiet: false,
    showVirtualTs: false,
  };

  for (const rawArg of rawArgs) {
    switch (rawArg) {
      case "--strict":
        options.strict = true;
        break;
      case "--show-virtual-ts":
        options.showVirtualTs = true;
        break;
      case "--quiet":
      case "-q":
        options.quiet = true;
        break;
      default:
        if (rawArg.startsWith("-")) {
          console.error(`Unknown Vize check option: ${rawArg}`);
          process.exit(1);
        }

        options.patterns.push(rawArg);
        break;
    }
  }

  if (options.patterns.length === 0) {
    options.patterns.push("src/**/*.vue");
  }

  return options;
}

function getLineColumn(source: string, offset: number) {
  const clampedOffset = Math.max(0, Math.min(offset, source.length));
  const before = source.slice(0, clampedOffset);
  const line = before.split("\n").length;
  const lastNewlineIndex = before.lastIndexOf("\n");
  const column = before.length - lastNewlineIndex;

  return { line, column };
}

function resolveVueFiles(patterns: string[]) {
  const files = new Set<string>();

  for (const pattern of patterns) {
    const matches = globSync(pattern, {
      exclude: ["**/node_modules/**", "**/dist/**"],
    });

    for (const match of matches) {
      if (match.endsWith(".vue")) {
        files.add(resolve(process.cwd(), match));
      }
    }
  }

  return [...files].sort();
}

function colorize(severity: string, text: string) {
  switch (severity) {
    case "error":
      return `\u001B[31m${text}\u001B[0m`;
    case "warning":
      return `\u001B[33m${text}\u001B[0m`;
    default:
      return text;
  }
}

function formatSummaryLabel(text: string, colorCode: "31" | "32" | "33") {
  return `\u001B[${colorCode}m${text}\u001B[0m`;
}

function createTypeCheckOptions(
  config: RunnerVizeConfig["typeChecker"],
  cliOptions: CheckCliOptions,
): TypeCheckOptions {
  return {
    strict: cliOptions.strict ?? config?.strict,
    includeVirtualTs: cliOptions.showVirtualTs,
    checkProps: config?.checkProps,
    checkEmits: config?.checkEmits,
    checkTemplateBindings: config?.checkTemplateBindings,
  };
}

async function runCheck(commandArgs: string[]) {
  const cliOptions = parseCheckArgs(commandArgs);
  const config = (await loadConfig(process.cwd(), {
    env: {
      mode: "production",
      command: "check",
    },
  })) as RunnerVizeConfig | null;

  if (config?.typeChecker?.enabled === false) {
    process.exit(0);
  }

  const files = resolveVueFiles(cliOptions.patterns);

  if (files.length === 0) {
    console.log("No Vue SFC files matched.");
    process.exit(0);
  }

  const start = performance.now();
  const typeCheckOptions = createTypeCheckOptions(config?.typeChecker, cliOptions);
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const filePath of files) {
    const source = readFileSync(filePath, "utf8");
    const result = vizeNative.typeCheck(source, {
      ...typeCheckOptions,
      filename: relative(process.cwd(), filePath),
    });

    totalErrors += result.errorCount;
    totalWarnings += result.warningCount;

    if (!cliOptions.quiet && result.diagnostics.length > 0) {
      console.log(`\n\u001B[4m${relative(process.cwd(), filePath)}\u001B[0m`);

      for (const diagnostic of result.diagnostics) {
        const { line, column } = getLineColumn(source, diagnostic.start);
        const code = diagnostic.code ? ` [${diagnostic.code}]` : "";
        const label = `${diagnostic.severity}:${line}:${column}${code} ${diagnostic.message}`;
        console.log(`  ${colorize(diagnostic.severity, label)}`);

        if (diagnostic.help) {
          console.log(`  help: ${diagnostic.help}`);
        }
      }
    }

    if (cliOptions.showVirtualTs && result.virtualTs) {
      console.log(`\n// ${relative(process.cwd(), filePath)}`);
      console.log(result.virtualTs);
    }
  }

  const elapsedMs = performance.now() - start;
  const status = totalErrors > 0 ? formatSummaryLabel("x", "31") : formatSummaryLabel("✓", "32");
  console.log(
    `\n${status} Type checked ${files.length} files in ${(elapsedMs / 1000).toFixed(2)}s`,
  );

  if (totalErrors > 0) {
    console.log(`  ${formatSummaryLabel(`${totalErrors} error(s)`, "31")}`);
  } else if (totalWarnings > 0) {
    console.log(`  ${formatSummaryLabel(`${totalWarnings} warning(s)`, "33")}`);
  } else {
    console.log(`  ${formatSummaryLabel("No type errors found!", "32")}`);
  }

  process.exit(totalErrors > 0 ? 1 : 0);
}

async function main() {
  if (command === "check") {
    await runCheck(args.slice(1));
    return;
  }

  console.error("Usage: node ./scripts/vize-runner.ts check [...args]");
  process.exit(1);
}

await main();
