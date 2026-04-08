# Netlify Terraform

Netlify deployment settings for the website live here.

## What this manages

- Existing Netlify site lookup by team slug and site name
- Site build settings
- `NODE_VERSION` for builds

## What this does not manage yet

- Initial site creation
- Domains and DNS records
- Secrets

## Usage

Set your Netlify token first:

```bash
export NETLIFY_API_TOKEN="..."
```

Then copy the example tfvars and apply:

```bash
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
terraform apply
```

The default build command is:

```text
pnpm exec vp run ssg
```

That keeps the app build aligned with the Vite+ workflow while still producing the static `dist` directory for Netlify.
