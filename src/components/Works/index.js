/* eslint-disable react/no-children-prop */
import React from 'react'
import { Route } from 'react-router-dom'
import cx from 'classnames'
import styles from './styles.scss'
import works from '../../content/works.json'
import Fade from '../Fade'
import Project from '../Project'

const Works = ({ location, transitions }) =>
  <div className={styles.works}>
    <Route
      location={location}
      path="/on/:slug"
      children={({ match }) =>
        <Fade isTransitioning={transitions.location.isActive}>
          <div
            className={cx(styles.projectList, {
              [styles.isDetailView]: Boolean(match),
            })}
          >
            {works.projects.map(
              project =>
                (!match || match.params.slug === project.slug) &&
                <Project slug={project.slug} match={match} />
            )}
          </div>
        </Fade>}
    />
  </div>

export default Works
