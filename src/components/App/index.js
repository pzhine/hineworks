import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import RouteMonitor from '../RouteMonitor'
import Home from '../Home'
import Works from '../Works'
import Menu from '../Menu'

const App = () =>
  <Provider store={store}>
    <RouteMonitor>
      <main className={styles.app}>
        <Menu />
        <div className={styles.content}>
          <Route exact path="/" component={Home} />
          <Works />
        </div>
      </main>
    </RouteMonitor>
  </Provider>

export default App
