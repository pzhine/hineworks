import React from 'react'
import cx from 'classnames'
import LazyLoad from 'react-lazyload'
import MediaQuery from 'react-responsive'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work, target }) => {
  const { tablet } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: tablet - 1 }
    : { minWidth: tablet }
  return (
    <MediaQuery {...mq}>
      {work.media[target].index.map(src =>
        <LazyLoad key={src}>
          <div
            style={{
              backgroundImage: `url('${config.mediaUrl}/${work.slug}/${src}.png')`,
            }}
            className={cx(styles.thumb, styles[target], {
              [styles.twoRows]: work.media[target].index.length === 2,
            })}
          />
        </LazyLoad>
      )}
    </MediaQuery>
  )
}
