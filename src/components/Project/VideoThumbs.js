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
        const youtube = vid.match(/youtube\.com\/watch\?v=(.+)/)
        return youtube
          ? (
            <div className='ytvideoWrapper'>
              <iframe width="560" height="349" src={`https://www.youtube.com/embed/${youtube[1]}`} title="YouTube video player" frameborder="0" allow="fullscreen; web-share" allowfullscreen></iframe>
            </div>
          )
          : (
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
