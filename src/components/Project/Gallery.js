import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

export default ({ work, target, isDetail }) => {
  const images = [...(work.media[target].screens || []), ...(work.media[target].photos || [])]
  return (
    isDetail &&
    <div className={cx(styles.gallery, styles[target])}>
      {images.map(src => {
        const ext = src.match('photo') ? 'jpg' : 'png'
        return (
          <img
            key={target + src}
            src={require(`../../public/media/${work.slug}/${src}.${ext}`)}
            alt={'gallery thumbnail'}
          />
        )
      })}
    </div>
  )
}
