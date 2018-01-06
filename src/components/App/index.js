import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'
import works from '../../content/works.json'
import config from '../../content/config.json'

import RouteMonitor from '../RouteMonitor'
import Home from '../Home'
import Works from '../Works'
import Menu from '../Menu'
import Player from '../Player'

const App = () =>
  <Provider store={store}>
    <RouteMonitor>
      <main className={styles.app}>
        <Menu />
        <Route
          path="/on/:slug/play/:media"
          children={({ match, history }) =>
            <Player
              isActive={Boolean(match)}
              src={match && `${config.mediaUrl}/${match.params.slug}/${match.params.media}`}
              title={match && works.projects.find(w => w.slug === match.params.slug).title}
              onClose={() => history.goBack()}
            />}
        />
        <div className={styles.content}>
          <Route exact path="/" component={Home} />
          <Works />
        </div>
      </main>
    </RouteMonitor>
  </Provider>

export default App
