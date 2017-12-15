import React from 'react'
import styles from './styles.scss'
import works from '../../content/works.json'

const Project = ({ match }) => {
  let work = null
  try {
    work = works.projects.find(p => p.slug === match.params.project)
  } catch (e) {
    // TODO: log 404
  }
  if (!work) {
    return <h2>Project not found</h2>
  }
  return (
    <section className={styles.project}>
      <h2>
        {work.title}
      </h2>
    </section>
  )
}

export default Project
