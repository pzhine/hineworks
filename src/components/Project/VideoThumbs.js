import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import config from '../../content/config.json'
import styles from './styles.scss'

import PlayIcon from '../../icons/play.svg'

export default ({ work, target, isDetail }) => {
  if (!isDetail) {
    return null
  }
  return work.media[target].videos.map(vid => {
    const ext = target.match('mobile') || vid.match('mobile') ? 'png' : 'gif'
    const src = `/on/${work.slug}/play/${vid}.mp4`
    return (
      <Link to={src} key={target + vid} className={cx(styles.videoThumb, styles[target])}>
        <div className={styles.playButton}>
          <PlayIcon />
        </div>
        <div className={styles.thumb}>
          <picture>
            <source
              srcSet={`${config.mediaUrl}/${work.slug}/${vid}-thumb.${ext}`}
              media={
                target.match('mobile')
                  ? `(max-width: ${config.breakpoints.desktop}px)`
                  : `(min-width: ${config.breakpoints.desktop + 1}px)`
              }
            />
            <img src="/favicon.png" alt={`${target} video thumb`} />
          </picture>
        </div>
      </Link>
    )
  })
}
