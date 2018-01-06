import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work }) =>
  <Link to={`/on/${work.slug}`} className={styles.thumb}>
    {work.media.mobile.index.map(src =>
      <img
        key={`mobile-${src}`}
        className={styles.mobileThumb}
        src={`${config.mediaUrl}/${work.slug}/${src}.png`}
        alt={'mobile thumbnail'}
      />
    )}
    {work.media.desktop.index.map(src =>
      <img
        key={`mobile-${src}`}
        className={styles.desktopThumb}
        src={`${config.mediaUrl}/${work.slug}/${src}.png`}
        alt={'mobile thumbnail'}
      />
    )}
  </Link>
