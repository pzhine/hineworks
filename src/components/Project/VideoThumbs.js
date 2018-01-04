import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './styles.scss'

import PlayIcon from '../../icons/play.svg'

export default ({ work, target, isDetail }) => {
  if (!isDetail) {
    return null
  }
  return work.media[target].videos.map(vid => {
    const ext = target.match('mobile') || vid.match('mobile') ? 'png' : 'gif'
    const src = `/player/${work.slug}/${vid}.mp4`
    return (
      <Link to={src} key={target + vid} className={cx(styles.videoThumb, styles[target])}>
        <div className={styles.playButton}>
          <PlayIcon />
        </div>
        <div className={styles.thumb}>
          <img
            src={require(`../../public/media/${work.slug}/${vid}-thumb.${ext}`)}
            alt={`${target} video thumb`}
          />
        </div>
      </Link>
    )
  })
}
