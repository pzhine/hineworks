import React from 'react'
import styles from './styles.scss'
import config from '../../content/config.json'
import { Block } from '../Raw'

export default () =>
  <section className="title">
    <Block className="line1" html={config.title[0]} />
    <Block className="line2" html={config.title[1]} />
  </section>
