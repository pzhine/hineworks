import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'
import CloseIcon from '../../icons/close.svg'

const Player = ({ isActive, title, src, onClose }) =>
  <div className={cx(styles.player, { [styles.isActive]: isActive })}>
    <button className={styles.closeButton} onClick={onClose}>
      <CloseIcon />
    </button>
    <div className={styles.title}>
      {title}
    </div>
    <video autoPlay muted loop src={src} />
  </div>

export default Player