import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import Home from '../Home'
import Project from '../Project'
import Menu from '../Menu'

const App = () =>
  <Provider store={store}>
    <main className={styles.app}>
      <Menu />
      <div className={styles.content}>
        <Route exact path="/" component={Home} />
        <Route path="/on/:project" component={Project} />
      </div>
    </main>
  </Provider>

export default App
