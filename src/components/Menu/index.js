import React from 'react'
import Link from 'react-router/lib/Link'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'
import HamburgerIcon from '../../icons/hamburger.svg'
import CloseIcon from '../../icons/close.svg'
import data from '../../content/menu.json'
import config from '../../content/config.json'
import actions from '../../redux/app/actions'

const Menu = ({ toggleMenuIsActive, app }) =>
  <div className={cx(styles.menu, { [styles.isActive]: app.menuIsActive })}>
    <HamburgerIcon className={styles.hamburger} onClick={() => toggleMenuIsActive(true)} />
    <CloseIcon className={styles.close} onClick={() => toggleMenuIsActive(false)} />
    <div className={styles.container}>
      <Link className={styles.title} to="/" replace>
        {config.title}
      </Link>
      <ul>
        {data.map(item =>
          <li key={item.path || item.url}>
            {item.path
              ? <Link to={item.path}>
                  {item.title}
                </Link>
              : <a href={item.url} target="_blank">
                  {item.title}
                </a>}
          </li>
        )}
      </ul>
    </div>
  </div>

export default connect(state => state, actions)(Menu)
