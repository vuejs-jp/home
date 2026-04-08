terraform {
  required_version = ">= 1.0.0"

  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.4"
    }
  }
}

provider "netlify" {
  default_team_slug = var.netlify_team_slug
}

data "netlify_team" "current" {
  slug = var.netlify_team_slug
}

data "netlify_site" "home" {
  team_slug = var.netlify_team_slug
  name      = var.netlify_site_name
}

resource "netlify_site_build_settings" "home" {
  site_id                      = data.netlify_site.home.id
  build_command                = "pnpm exec vp run ssg"
  publish_directory            = "dist"
  production_branch            = var.production_branch
  branch_deploy_branches       = var.branch_deploy_branches
  deploy_previews              = true
  prevent_non_git_prod_deploys = true
}

resource "netlify_environment_variable" "node_version" {
  team_id = data.netlify_team.current.id
  site_id = data.netlify_site.home.id
  key     = "NODE_VERSION"
  scopes  = ["builds"]

  values = [
    {
      value   = var.node_version
      context = "all"
    }
  ]
}
