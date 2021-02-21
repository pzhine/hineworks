import React from 'react'
import cx from 'classnames'
import Intro from './Intro'
import Title from './Title'
import styles from './styles.scss'

const Home = ({ isTransitioning }) =>
  <div
    className={cx(styles.home, {
      [styles.isTransitioning]: isTransitioning,
    })}
  >
    <Title />
    <Intro />
  </div>

export default Home
