import React from 'react'
import Intro from './Intro'
import Title from './Title'
import styles from './styles.scss'

const Home = () =>
  <div className={styles.home}>
    <Title />
    <Intro />
  </div>

export default Home
