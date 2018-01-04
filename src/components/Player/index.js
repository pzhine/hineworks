import React from 'react'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'

const Player = ({ src, onClose }) =>
  <div className={styles.player}>
    <button className={styles.closeButton} onClick={onClose}>
      <CloseIcon />
    </button>
    <video
      autoPlay="true"
      muted="true"
      controls="false"
      loop="true"
      poster="/ajax-loader.gif"
      src={src}
    />
  </div>

export default Player
