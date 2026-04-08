import * as v from "valibot";

export type RawRouteQuery = Record<string, string | string[] | null | undefined>;

export type HomeGreeting =
  | {
      status: "default";
    }
  | {
      status: "personalized";
      name: string;
    }
  | {
      status: "invalid";
    };

const homeQuerySchema = v.object({
  name: v.optional(
    v.pipe(v.string(), v.minLength(1), v.maxLength(24), v.regex(/^[\p{L}\p{N} _-]+$/u)),
  ),
});

function takeFirstValue(value: string | string[] | null | undefined) {
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    return trimmedValue.length > 0 ? trimmedValue : undefined;
  }

  if (Array.isArray(value)) {
    const firstValue = value[0];
    if (typeof firstValue !== "string") {
      return undefined;
    }

    const trimmedValue = firstValue.trim();
    return trimmedValue.length > 0 ? trimmedValue : undefined;
  }

  return undefined;
}

export function parseHomeQuery(query: RawRouteQuery): HomeGreeting {
  const result = v.safeParse(homeQuerySchema, {
    name: takeFirstValue(query.name),
  });

  if (!result.success) {
    return {
      status: "invalid",
    };
  }

  if (result.output.name) {
    return {
      status: "personalized",
      name: result.output.name,
    };
  }

  return {
    status: "default",
  };
}
