import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

export default ({ work }) =>
  <Link to={`/on/${work.slug}`} className={styles.thumb}>
    {work.media.mobile.index.map((src, idx) => [
      <img
        key={idx}
        className={styles.mobileThumb}
        src={require(`../../public/media/${work.slug}/${src}.png`)}
        alt={'mobile thumbnail'}
      />,
      <img
        key={idx}
        className={styles.desktopThumb}
        src={require(`../../public/media/${work.slug}/${src}.png`)}
        alt={'desktop thumbnail'}
      />,
    ])}
  </Link>
