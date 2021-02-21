import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import transitionProps from '../../hoc/transitionProps'
import store from '../../redux/configureStore'
import styles from './styles.scss'
import works from '../../content/works.json'
import config from '../../content/config.json'

import ScrollManager from '../ScrollManager'
import Fade from '../Fade'
import Home from '../Home'
import Works from '../Works'
import Menu from '../Menu'
import Nav from '../Nav'
import Player from '../Player'

const App = ({ location, transitions }) =>
  <Provider store={store}>
    <ScrollManager exclude={['/play/']} location={location}>
      <main className={styles.app}>
        <Menu />
        <Nav />
        <Route
          path="/on/:slug/play/:media"
          children={({ match, history }) =>
            <Player
              isActive={Boolean(match)}
              src={
                match &&
                `${config.mediaUrl}/${match.params.slug}/${match.params.media}`
              }
              title={
                match &&
                works.projects.find(w => w.slug === match.params.slug).title
              }
              onClose={() => history.goBack()}
            />}
        />
        <div className={styles.content}>
          <Route
            exact
            location={location}
            path="/"
            children={({ match }) =>
              <Fade isTransitioning={transitions.location.isActive}>
                {match && <Home />}
              </Fade>}
          />
          <Works location={location} transitions={transitions} />
        </div>
      </main>
    </ScrollManager>
  </Provider>

export default compose(
  withRouter,
  transitionProps({
    propsToTransition: () => ({
      location: {
        duration: 300,
        compare: ({ pre, post }) => pre.pathname === post.pathname,
        exclude: ({ pre, post }) =>
          pre.pathname.match('/play/') || post.pathname.match('/play/'),
      },
    }),
  })
)(App)
