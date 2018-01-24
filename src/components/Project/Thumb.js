import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import LazyLoad from 'react-lazyload'
import MediaQuery from 'react-responsive'
import config from '../../content/config.json'
import styles from './styles.scss'

export default ({ work, target }) => {
  const { desktop } = config.breakpoints
  const mq = target.match('mobile')
    ? { maxWidth: desktop - 1 }
    : { minWidth: desktop }
  return (
    <MediaQuery {...mq}>
      <Link
        to={`/on/${work.slug}`}
        className={cx(styles.thumb, styles[target], {
          [styles.twoRows]: work.media[target].index.length === 2,
        })}
      >
        {work.media[target].index.map(src =>
          <LazyLoad key={src}>
            <img
              src={`${config.mediaUrl}/${work.slug}/${src}.png`}
              alt={`${target} thumb`}
            />
          </LazyLoad>
        )}
      </Link>
    </MediaQuery>
  )
}
