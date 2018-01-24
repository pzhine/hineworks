import React, { Component } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'
import LoadingIcon from '../../icons/loading.svg'
import Video from './Video'

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
      <div className={cx(styles.player, { [styles.isActive]: isActive })}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={styles.title}>
          {title}
        </div>
        <div
          className={cx(styles.videoContainer, {
            [styles.isLoaded]: this.state.canPlayThrough,
          })}
        >
          <LoadingIcon />
          <Video
            src={src}
            onReadyStateChange={v => this.updateLoadProgress(v)}
          />
        </div>
      </div>
    )
  }
}

export default Player
