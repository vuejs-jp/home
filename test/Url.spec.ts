import Url from '../support/Url'

describe('unit/support/Url', () => {
  describe('isExternalLink', () => {
    it('can determine if the given URL is external or not', () => {
      expect(Url.isExternalLink('http://example.com')).toBe(true)
      expect(Url.isExternalLink('https://example.com')).toBe(true)
      expect(Url.isExternalLink('/example-page')).toBe(false)
      expect(Url.isExternalLink('example-page')).toBe(false)
    })
  })
})
