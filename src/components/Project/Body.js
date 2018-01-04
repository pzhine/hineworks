/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */

import React from 'react'
import styles from './styles.scss'

export default ({ work, isDetail }) =>
  isDetail &&
  <div className={styles.body}>
    {work.body.map((html, idx) => <p key={idx} dangerouslySetInnerHTML={{ __html: html }} />)}
  </div>
