variable "netlify_team_slug" {
  description = "Netlify team slug that owns the site."
  type        = string
}

variable "netlify_site_name" {
  description = "Existing Netlify site name to manage."
  type        = string
}

variable "production_branch" {
  description = "Primary production branch."
  type        = string
  default     = "main"
}

variable "branch_deploy_branches" {
  description = "Additional branches that should produce branch deploys."
  type        = list(string)
  default     = ["staging"]
}

variable "node_version" {
  description = "Node.js major version used in Netlify builds."
  type        = string
  default     = "24"
}
