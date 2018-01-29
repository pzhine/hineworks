import { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollManager extends Component {
  constructor(props) {
    super(props)
    this.history = []
  }
  saveScroll(location) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    this.history.push({
      pathname: location.pathname,
      scrollTop,
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
  restoreScroll() {
    const lastPage = this.history.pop()
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
      !this.isExcluded(nextProps.location.pathname) &&
      (!this.history.length ||
        this.prevPage().pathname !== nextProps.location.pathname)
    ) {
      this.saveScroll(location)
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

export default withRouter(ScrollManager)
