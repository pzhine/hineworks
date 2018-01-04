import React from 'react'
import styles from './styles.scss'
import config from '../../content/config.json'
import { Block } from '../Raw'

export default () =>
  <section className={styles.title}>
    <Block className={styles.line1} html={config.title[0]} />
    <Block className={styles.line2} html={config.title[1]} />
  </section>
