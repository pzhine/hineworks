import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'
import data from '../../content/menu.json'
import config from '../../content/config.json'
import actions from '../../redux/app/actions'

import HamburgerIcon from '../../icons/hamburger.svg'
import CloseIcon from '../../icons/close.svg'

const onClick = ({ e, toggleMenuIsActive }) => {
  const { target } = e
  if (target.tagName.toLowerCase() === 'a' && target.id !== 'hamburger') {
    if (window.location.href.match(target.href)) {
      setTimeout(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 100)
    }
    toggleMenuIsActive(false)
  }
}

const Menu = ({ toggleMenuIsActive, app }) =>
  <div
    className={cx(styles.menu, { [styles.isActive]: app.menuIsActive })}
    onClick={e => app.menuIsActive && onClick({ e, toggleMenuIsActive })}
  >
    <a
      onClick={() => toggleMenuIsActive(true)}
      id="hamburger"
      className={styles.hamburger}
    >
      <HamburgerIcon />
    </a>
    <a onClick={() => toggleMenuIsActive(false)} className={styles.close}>
      <CloseIcon />
    </a>
    <div className={styles.container}>
      <Link className={styles.title} to="/">
        {config.title.join(' ')}
      </Link>
      <a
        className={styles.email}
        target="_blank"
        href={`mailto:${config.email}`}
      >
        {config.email}
      </a>
      {data.map(
        item =>
          item.path
            ? <Link to={item.path} key={item.path || item.url}>
                {item.title}
              </Link>
            : <a href={item.url} target="_blank" key={item.path || item.url}>
                {item.title}
              </a>
      )}
    </div>
  </div>

export default connect(state => state, actions)(Menu)
