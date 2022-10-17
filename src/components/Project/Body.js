/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */

import React from 'react'
import { Block } from '../Raw'
import styles from './styles.scss'

export default ({ work }) =>
  <div className="body">
    {work.body.map((html, idx) =>
      <Block key={idx} html={html} component="p" />
    )}
  </div>
