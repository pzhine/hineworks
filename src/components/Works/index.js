/* eslint-disable react/no-children-prop */
import React from 'react'
import { Route } from 'react-router-dom'
import cx from 'classnames'
import styles from './styles.scss'
import works from '../../content/works.json'
import Project from '../Project'

export default () =>
  <div className={styles.works}>
    <Route
      path="/on/:slug"
      children={({ match }) =>
        <div className={cx(styles.projectList, { [styles.isDetailView]: Boolean(match) })}>
          {works.projects.map(
            project =>
              (!match || match.params.slug === project.slug) &&
              <Project key={project.slug} slug={project.slug} match={match} />
          )}
        </div>}
    />
  </div>
