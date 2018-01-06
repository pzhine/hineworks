import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'

const videoDef = {
  elem: null,
}
const bindVideo = e => {
  videoDef.elem = e
}
const playPause = () => (videoDef.elem.paused ? videoDef.elem.play() : videoDef.elem.pause())

const Player = ({ isActive, title, src, onClose }) =>
  <div className={cx(styles.player, { [styles.isActive]: isActive })}>
    <button className={styles.closeButton} onClick={onClose}>
      <CloseIcon />
    </button>
    <div className={styles.title}>
      {title}
    </div>
    <video autoPlay muted loop src={src} playsInline ref={e => bindVideo(e)} onClick={playPause} />
  </div>

export default Player
