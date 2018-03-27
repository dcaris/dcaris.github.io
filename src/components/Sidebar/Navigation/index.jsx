import React from 'react'
import Link from 'gatsby-link'

import styles from '../../../styles/site.module.scss'

const Navigation = () => (
  <ul className={styles.dcSidebarNav}>
    <li>
      <Link to="/blog">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/archive">
        Archive
      </Link>
    </li>
    <li>
      <Link to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default Navigation