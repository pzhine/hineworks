import { Component } from 'react'
import * as browser from '../../lib/browser'

class ScrollManager extends Component {
  constructor(props) {
    super(props)
    this.history = []
    browser.setManualScrollRestoration()
  }
  saveScroll({ location, nextLocation }) {
    const scrollTop = browser.getScrollPos()
    this.history.push({
      pathname: location.pathname,
      scrollTop,
    })
    if (!this.isExcluded(nextLocation.pathname)) {
      browser.scrollTo(0)
    }
  }
  restoreScroll() {
    const lastPage = this.history.pop()
    browser.scrollTo(lastPage.scrollTop)
    document.documentElement.scrollTop = lastPage.scrollTop
    document.body.scrollTop = lastPage.scrollTop
  }
  prevPage() {
    return this.history[this.history.length - 1]
  }
  isExcluded(pathname) {
    return this.props.exclude.reduce(
      (exclude, p) => exclude || pathname.match(p),
      false
    )
  }
  componentWillReceiveProps(nextProps) {
    const { location } = this.props
    if (
      location.pathname !== nextProps.location.pathname &&
      !nextProps.location.hash &&
      (!this.history.length ||
        this.prevPage().pathname !== nextProps.location.pathname)
    ) {
      this.saveScroll({ nextLocation: nextProps.location, location })
    }
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (
      location.pathname !== prevProps.location.pathname &&
      !location.hash &&
      this.history.length &&
      this.prevPage().pathname === location.pathname
    ) {
      this.restoreScroll()
    }
  }
  render() {
    return this.props.children
  }
}

export default ScrollManager
