import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'

class Player extends PureComponent {
  constructor(props) {
    super(props)
    this.videoElem = null
    this.state = {
      loadProgress: 5,
      canPlayThrough: false,
    }
  }
  bindVideo(e) {
    this.videoElem = e
  }
  playPause() {
    if (this.videoElem.paused) {
      this.videoElem.play()
    } else {
      this.videoElem.pause()
    }
  }
  updateLoadProgress() {
    if (this.videoElem.readyState === 0) {
      return
    }
    const endBuf = this.videoElem.buffered.end(0)
    const canPlayThrough = this.videoElem.readyState === 4
    this.setState({
      loadProgress: canPlayThrough ? 5 : parseInt(endBuf / this.videoElem.duration * 100, 10),
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
          className={cx(styles.videoContainer, { [styles.isLoaded]: this.state.canPlayThrough })}
        >
          <p>
            {this.state.loadProgress}%
          </p>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            ref={e => this.bindVideo(e)}
            onClick={() => this.playPause()}
            onProgress={() => this.updateLoadProgress()}
            onLoadStart={() => this.updateLoadProgress()}
            onCanPlay={() => this.updateLoadProgress()}
          />
        </div>
      </div>
    )
  }
}

export default Player
