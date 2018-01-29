import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work, target }) => {
  const images = [
    ...(work.media[target].screens || []),
    ...(work.media[target].photos || []),
  ]
  const { mobile } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: mobile - 1 }
    : { minWidth: mobile }

  return (
    <MediaQuery {...mq}>
      <div className={styles.gallery}>
        {images.map(src => {
          const ext = src.match('photo') ? 'jpg' : 'png'
          let className = styles.desktop
          if (src.match('mobile')) {
            className = styles.mobile
          } else if (src.match('tablet')) {
            className = styles.tablet
          }
          return (
            <Link to={`/on/${work.slug}/play/${src}.${ext}`} key={target + src}>
              <img
                className={className}
                src={`${config.mediaUrl}/${work.slug}/${src}.${ext}`}
                alt={'gallery thumbnail'}
              />
            </Link>
          )
        })}
      </div>
    </MediaQuery>
  )
}
