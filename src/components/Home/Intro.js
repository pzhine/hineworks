import React from 'react'
import styles from './styles.scss'
import config from '../../content/config.json'
import { Block } from '../Raw'

const Intro = () =>
  <section className={styles.intro}>
    {config.intro.map((html, idx) => <Block key={idx} className={styles.info} html={html} />)}
  </section>

export default Intro
