import React from 'react'
import Link from 'gatsby-link'

import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

import styles from "../../styles/site.module.scss"

const Sidebar = () => (
  <div className={styles.dcSidebar}>
    <h1>MY NAME IS</h1>
    <h1>
      <Link to="/">
        DANIEL CARIS
      </Link>
    </h1>

    <Navigation />
    <SocialLinks />
  </div>
)

export default Sidebar