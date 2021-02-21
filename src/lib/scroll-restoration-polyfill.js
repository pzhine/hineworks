// from https://github.com/bfred-it/scroll-restoration-polyfill

import once from 'one-event'
import { getScrollTop, getScrollLeft } from 'get-scroll'

export default function() {
  console.log(typeof window)
  if (typeof window === 'undefined') {
    return
  }
  console.log('here')
  if ('scrollRestoration' in window.history) {
    return
  }
  let state = 'auto'
  let left = 0
  let top = 0

  function restoreScroll() {
    window.scrollTo(left, top)
  }

  function waitForScroll() {
    left = getScrollLeft()
    top = getScrollTop()
    once(window, 'scroll', restoreScroll)
  }

  Object.defineProperty(window.history, 'scrollRestoration', {
    enumerable: true,
    get: () => state,
    set: requestedState => {
      if (requestedState === state) {
        return
      }
      if (requestedState === 'auto') {
        window.removeEventListener('popstate', waitForScroll)
        window.removeEventListener('scroll', restoreScroll)
        state = requestedState
      } else if (requestedState === 'manual') {
        window.addEventListener('popstate', waitForScroll)
        state = requestedState
      }
    },
  })
}
