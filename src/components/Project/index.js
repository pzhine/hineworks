import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import works from '../../content/works.json'

import Thumb from './Thumb'
import Summary from './Summary'
import VideoThumbs from './VideoThumbs'
import Body from './Body'
import Gallery from './Gallery'

import BackIcon from '../../icons/back.svg'

const getWork = ({ match, slug }) => {
  // if project was specified in component props, use that to fetch
  if (slug) {
    return works.projects.find(p => p.slug === slug)
  }
  // otherwise, we're loading server-side, use the route params
  try {
    return works.projects.find(p => p.slug === match.params.project)
  } catch (e) {
    return false
  }
}

const Project = ({ match, slug }) => {
  const work = getWork({ match, slug })
  if (!work) {
    return <h2>Project not found</h2>
  }
  // are we viewing the summary (for index page) or detail
  const isDetail = match && match.params.slug === work.slug
  const isDetailView = Boolean(match)
  return (
    <article
      className={cx(styles.project, {
        [styles.isDetail]: isDetail,
        [styles.isDetailView]: isDetailView,
      })}
    >
      <Link className={styles.back} to={'/'}>
        <BackIcon />
      </Link>
      <h3>
        <Link to={`/on/${work.slug}`}>
          {work.title}
        </Link>
      </h3>
      <Link to={`/on/${work.slug}`}>
        <Thumb work={work} target={'mobile'} key={'tm'} />
        <Thumb work={work} target={'desktop'} key={'td'} />
      </Link>
      <Summary work={work} isDetail={isDetail} />
      {isDetail && [
        <VideoThumbs target={'mobile'} work={work} key={'vtm'} />,
        <VideoThumbs target={'desktop'} work={work} key={'vtd'} />,
        <Body work={work} key={'body'} />,
        <Gallery target={'mobile'} work={work} key={'gm'} />,
        <Gallery target={'desktop'} work={work} key={'gd'} />,
      ]}
    </article>
  )
}

export default Project
