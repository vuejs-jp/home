output "site_id" {
  description = "Managed Netlify site ID."
  value       = data.netlify_site.home.id
}

output "custom_domain" {
  description = "Current custom domain configured on the Netlify site."
  value       = data.netlify_site.home.custom_domain
}
