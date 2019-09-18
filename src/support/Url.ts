/**
 * Check if the given link is pointing to an external URL. This method will
 * consider any URL starting with `http://` or `https://` as an external link.
 *
 * @param {string} link The link URL to be checked.
 * @return {boolean}
 */
export function isExternalLink (link: string): boolean {
  return !!link.match(/^http(s)?:\/\//)
}

export default { isExternalLink }
