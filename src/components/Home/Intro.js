import React from 'react'
import MediaQuery from 'react-responsive'
import styles from './styles.scss'
import config from '../../content/config.json'
import { Block } from '../Raw'

const Intro = () =>
  <section className={styles.intro}>
    {config.intro.map((html, idx) =>
      <MediaQuery minWidth={config.breakpoints.desktop}>
        {isDesktop =>
          <Block
            key={idx}
            className={styles.info}
            html={html}
            brToSpace={isDesktop}
          />}
      </MediaQuery>
    )}
  </section>

export default Intro
