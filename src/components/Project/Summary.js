import React from 'react'
import { Link } from 'react-router-dom'
import { Block } from '../Raw'
import styles from './styles.scss'

export default ({ work, isDetail }) =>
  <div className="summary">
    <ul className="info">
      {work.info.map(entry =>
        <li key={entry[0]}>
          <em>
            {entry[0]}:
          </em>
          <Block className="fact" html={entry[1]} />
        </li>
      )}
    </ul>
    <ul className="links">
      {!isDetail &&
        <li key="detail">
          <Link to={`/on/${work.slug}`}>Details</Link>
        </li>}
      {work.links.map(link =>
        <li key={link[1]}>
          <a href={link[1]} target="_blank" rel="nofollow">
            {link[0]}
          </a>
        </li>
      )}
    </ul>
  </div>
