import React from 'react'
import styles from './styles.scss'
import config from '../../content/config.json'
import GithubIcon from '../../icons/github.svg'
import LinkedinIcon from '../../icons/linkedin.svg'

const Nav = () =>
  <div className={styles.nav}>
    <a target="_blank" href={config.cvUrl} alt={'CV'}>
      CV
    </a>
    <a target="_blank" href={config.githubUrl} alt={'Github'}>
      <GithubIcon />
    </a>
    <a target="_blank" href={config.linkedinUrl} alt={'LinkedIn'}>
      <LinkedinIcon />
    </a>
  </div>

export default Nav
