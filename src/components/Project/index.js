import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import styles from './styles.scss'
import works from '../../content/works.json'
import config from '../../content/config.json'

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
  const { desktop } = config.breakpoints
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
      <div className={styles.indexContainer}>
        <MediaQuery component="h3" maxWidth={desktop - 1}>
          <Link to={`/on/${work.slug}`}>
            {work.title}
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={desktop}>
          {isDesktop =>
            <div className={styles.indexRow}>
              {(!isDesktop || !isDetail) &&
                <Link to={`/on/${work.slug}`}>
                  <Thumb work={work} target={'mobile'} key={'tm'} />
                  <Thumb work={work} target={'desktop'} key={'td'} />
                </Link>}
              <div className={styles.summaryContainer}>
                <h3>
                  <Link to={`/on/${work.slug}`}>
                    {work.title}
                  </Link>
                </h3>
                {(!isDesktop || !isDetail) &&
                  <Summary work={work} isDetail={isDetail} />}
                {isDesktop &&
                  isDetail &&
                  <VideoThumbs target={'desktop'} work={work} key={'vtd'} />}
              </div>
            </div>}
        </MediaQuery>
      </div>
      {isDetail &&
        <div className={styles.detailContainer}>
          <MediaQuery maxWidth={desktop - 1}>
            <VideoThumbs target={'mobile'} work={work} key={'vtm'} />
            <VideoThumbs target={'desktop'} work={work} key={'vtd'} />
          </MediaQuery>
          <MediaQuery minWidth={desktop}>
            <Summary work={work} isDetail />
          </MediaQuery>
          <Body work={work} key={'body'} />
          <Gallery target={'mobile'} work={work} key={'gm'} />
          <Gallery target={'desktop'} work={work} key={'gd'} />
        </div>}
    </article>
  )
}

export default Project
