import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'
import config from '../../content/config.json'

const Home = () =>
  <section className={styles.home}>
    <div className={cx(styles.title, styles.line1)}>
      {config.title[0]}
    </div>
    <div className={cx(styles.title, styles.line2)}>
      {config.title[1]}
    </div>
  </section>

export default Home
