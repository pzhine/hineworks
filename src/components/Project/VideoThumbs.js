import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
import config from '../../content/config.json'
import styles from './styles.scss'

import PlayIcon from '../../icons/play.svg'

export default ({ work, target }) => {
  const { tablet } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: tablet - 1 }
    : { minWidth: tablet }
  return (
    <MediaQuery
      {...mq}
      className={cx(styles.videoThumbs, styles[target])}
      component="div"
    >
      {work.media[target].videos.map(vid => {
        const ext =
          target.match('mobile') || vid.match('mobile') ? 'png' : 'gif'
        const src = `/on/${work.slug}/play/${vid}.mp4`
        return (
          <Link
            to={src}
            className={cx(
              styles.videoThumb,
              styles[vid.match('mobile') ? 'mobile' : 'desktop']
            )}
            key={target + vid}
          >
            <div className={styles.playButton}>
              <PlayIcon />
            </div>
            <img
              src={`${config.mediaUrl}/${work.slug}/${vid}-thumb.${ext}`}
              alt={`${target} video thumb`}
            />
          </Link>
        )
      })}
    </MediaQuery>
  )
}
