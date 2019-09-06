/**
 * Make smooth "Scroll to Top" animation on the current window.
 *
 * @param {number} duration The scroll animation duration in milliseconds.
 * @return void
 */
export function scrollToTop (duration: number = 100): void {
  const scrollHeight = window.scrollY
  const scrollStep = Math.PI / (duration / 15)
  const cosParameter = scrollHeight / 2

  let scrollCount = 0
  let scrollMargin

  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval)

      return
    }

    scrollCount = scrollCount + 1
    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)

    window.scrollTo(0, (scrollHeight - scrollMargin))
  }, 15)
}

export default { scrollToTop }
