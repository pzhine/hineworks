import React from 'react'
import { Link, Route } from 'react-router-dom'
import styles from './styles.scss'

import Home from '../Home'
import Tools from '../Tools'

const App = () =>
  <div>
    <i className={styles.logo} />
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/tools">
          Tools
        </Link>
      </li>
    </ul>
    <div className={styles.content}>
      <Route exact path="/" component={Home} />
      <Route path="/tools" component={Tools} />
    </div>
  </div>

export default App
