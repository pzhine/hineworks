import React, { Component } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { compose } from 'redux'
import Transition from 'react-transition-group/Transition'
import freezeProps from '../../hoc/freezeProps'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'
import LoadingIcon from '../../icons/loading.svg'
import Video from './Video'
import lockScroll from '../../hoc/lockScroll'

class Player extends Component {
  constructor(props) {
    super(props)
    this.videoElem = null
    this.state = {
      loadProgress: 0,
      canPlayThrough: false,
    }
    this.updateLoadProgress = _.debounce(
      this.updateLoadProgress.bind(this),
      1000,
      {
        leading: false,
        trailing: true,
      }
    )
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        canPlayThrough: false,
      })
    }
  }
  updateLoadProgress(videoElem) {
    if (!videoElem) {
      return
    }
    const canPlayThrough = videoElem.readyState > 3
    if (canPlayThrough) {
      videoElem.play()
    } else {
      videoElem.pause()
    }
    this.setState({
      canPlayThrough,
    })
  }
  render() {
    const { isActive, title, src, onClose } = this.props
    return (
      <Transition in={isActive} timeout={300}>
        {state =>
          <div
            className={cx('player', {
              isActive: isActive,
              isVisible: state === 'entered',
            })}
          >
            <button className="closeButton" onClick={onClose}>
              <CloseIcon />
            </button>
            <div className="title">
              {title}
            </div>
            <div
              className={cx('videoContainer', {
                isLoaded: this.state.canPlayThrough,
              })}
            >
              {src && src.match('.mp4')
                ? [
                    <LoadingIcon />,
                    <Video
                      src={src}
                      onReadyStateChange={v => this.updateLoadProgress(v)}
                    />,
                  ]
                : <img src={src} alt={`${title} detail`} />}
            </div>
          </div>}
      </Transition>
    )
  }
}

export default compose(
  lockScroll({ lockWhen: props => props.isActive }),
  freezeProps({
    propsToFreeze: props => ({
      src: props.isActive,
      title: props.isActive,
    }),
  })
)(Player)
