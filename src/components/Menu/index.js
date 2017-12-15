import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'
import data from '../../content/menu.json'
import config from '../../content/config.json'
import actions from '../../redux/app/actions'

import hamburgerIcon from '../../icons/hamburger.svg'
import closeIcon from '../../icons/close.svg'

const Menu = ({ toggleMenuIsActive, app }) =>
  <div className={cx(styles.menu, { [styles.isActive]: app.menuIsActive })}>
    <button onClick={() => toggleMenuIsActive(true)} className={styles.hamburger}>
      <img src={hamburgerIcon} alt={'Menu'} />
    </button>
    <button onClick={() => toggleMenuIsActive(false)} className={styles.close}>
      <img src={closeIcon} alt={'Close'} />
    </button>
    <div className={styles.container}>
      <Link className={styles.title} to="/">
        {config.title.join(' ')}
      </Link>
      <a className={styles.email} target="_blank" href={`mailto:${config.email}`}>
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
