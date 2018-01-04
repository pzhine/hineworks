import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import actions from '../../redux/app/actions'

class RouteMonitor extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.toggleMenuIsActive(false)
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(connect(state => state, actions)(RouteMonitor))
