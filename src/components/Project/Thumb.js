import React from 'react'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work, target }) => {
  const { mobile } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: mobile - 1 }
    : { minWidth: mobile }
  return (
    <MediaQuery {...mq}>
      {work.media[target].index.map(src => {
        const ext = src.match('photo') ? 'jpg' : 'png'
        return (
          <div
            style={{
              backgroundImage: `url('${config.mediaUrl}/${work.slug}/${src}.${ext}')`,
            }}
            className={cx(styles.thumb, styles[target], {
              [styles.twoRows]: work.media[target].index.length === 2,
            })}
          />
        )
      })}
    </MediaQuery>
  )
}
