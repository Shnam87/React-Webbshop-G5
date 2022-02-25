import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/pageStyle.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
        <Link to="/">Hem</Link>
        <img src='{}' alt='Cart' />
    </nav>
  )
}

export default Nav