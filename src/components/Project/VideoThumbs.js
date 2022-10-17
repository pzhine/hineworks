import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
import config from '../../content/config.json'
import styles from './styles.scss'

import PlayIcon from '../../icons/play.svg'

export default ({ work, target }) => {
  const { mobile } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: mobile - 1 }
    : { minWidth: mobile }
  const { videos } = work.media[target]
  return (
    <MediaQuery
      {...mq}
      className={cx('videoThumbs', styles[target])}
      component="div"
    >
      {videos.map(vid => {
        const ext =
          target.match('mobile') || vid.match('mobile') ? 'png' : 'gif'
        return (
          <Link
            to={`/on/${work.slug}/play/${vid}.mp4`}
            className={cx(
              'videoThumb',
              vid.match('mobile') ? 'mobile' : 'desktop',
              {
                smaller: videos.length > 2,
              }
            )}
            key={target + vid}
          >
            <div className="playButton">
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
