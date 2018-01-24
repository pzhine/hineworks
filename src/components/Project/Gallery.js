import React from 'react'
import cx from 'classnames'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work, target }) => {
  const images = [
    ...(work.media[target].screens || []),
    ...(work.media[target].photos || []),
  ]
  return (
    <div className={cx(styles.gallery, styles[target])}>
      {images.map(src => {
        const ext = src.match('photo') ? 'jpg' : 'png'
        return (
          <img
            key={target + src}
            src={`${config.mediaUrl}/${work.slug}/${src}.${ext}`}
            alt={'gallery thumbnail'}
          />
        )
      })}
    </div>
  )
}
