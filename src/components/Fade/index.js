import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const Fade = ({ isTransitioning, children, isIn }) =>
  <div
    className={cx('fade', {
      isTransitioning: isTransitioning,
      isIn: isIn,
    })}
  >
    {children}
  </div>

export default Fade
