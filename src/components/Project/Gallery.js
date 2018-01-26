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
  const { tablet } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: tablet - 1 }
    : { minWidth: tablet }
  return (
    <MediaQuery {...mq}>
      <div className={styles.gallery}>
        {images.map(src => {
          const ext = src.match('photo') ? 'jpg' : 'png'
          return (
            <Link to={`/on/${work.slug}/play/${src}.${ext}`} key={target + src}>
              <img
                className={src.match('mobile') ? styles.mobile : styles.desktop}
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
