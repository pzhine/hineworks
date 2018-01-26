import React, { PureComponent } from 'react'

function _pd(e) {
  e.preventDefault()
}

function lockBodyScroll(lock) {
  if (typeof document === 'undefined') {
    // document undefined during server-side rendering
    return
  }
  document.body.style.overflow = lock ? 'hidden' : 'auto'
  if (lock) {
    document.body.addEventListener('touchmove', _pd, false)
  } else {
    document.body.removeEventListener('touchmove', _pd, false)
  }
}

export default function lockScroll({ lockWhen = () => true }) {
  return Wrapped =>
    class LockScroll extends PureComponent {
      componentWillMount() {
        lockBodyScroll(lockWhen(this.props))
      }
      componentWillUnmount() {
        lockBodyScroll(lockWhen(this.props))
      }
      componentWillReceiveProps(nextProps) {
        lockBodyScroll(lockWhen(nextProps))
      }
      render() {
        return <Wrapped {...this.props} />
      }
    }
}
