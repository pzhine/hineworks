import once from 'one-event'

export function scrollTo(pos) {
  document.documentElement.scrollTop = pos
  document.body.scrollTop = pos
}

export function getScrollPos() {
  return window.pageYOffset || document.documentElement.scrollTop
}

export function scrollRestorationPolyfill() {
  // from https://github.com/bfred-it/scroll-restoration-polyfill
  if ('scrollRestoration' in window.history) {
    return
  }
  let state = 'auto'
  let top = 0

  function restoreScroll() {
    window.scrollTo(top)
  }

  function waitForScroll() {
    top = getScrollPos()
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

export function setManualScrollRestoration() {
  if (typeof window === 'undefined') {
    return
  }
  scrollRestorationPolyfill()
  window.history.scrollRestoration = 'manual'
}
