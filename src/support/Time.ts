/**
 * Sleep the process for given time.
 *
 * @param {number} ms How long to sleep in milliseconds.
 * @return Promise<void>
 */
export function sleep (ms: number = 500): Promise<void> {
  return new Promise<undefined>((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * Delay given promise execution until given amount of time.
 *
 * @param {Promise<any>[]} iterable The promises to be executed.
 * @param {number} ms How long to sleep in milliseconds.
 * @return Promise<any[]>
 */
export function delay (iterable: Promise<any>[], ms?: number): Promise<any[]> {
  return Promise.all([...iterable, sleep(ms)])
}
