import React from 'react'
import Link from 'gatsby-link'

import styles from '../../../styles/site.module.scss'

const SocialLinks = () => (
  <ul className={styles.dcSidebarSocial}>
    <li>
      <a href="http://www.twitter.com/dcaris">
        <i className='fa fa-twitter'></i>
      </a>
    </li>
    <li>
      <a href="http://www.github.com/dcaris">
        <i className='fa fa-github'></i>
      </a>
    </li>
    <li>
      <a href="http://www.instagram.com/dcaris">
        <i className='fa fa-instagram'></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/daniel-caris-1501b122/">
        <i className='fa fa-linkedin'></i>
      </a>
    </li>
    {/* <li className={css(styles.dcSidebarSocialListItem)}>
      <Link to="/contact" className={css(styles.dcSidebarSocialListItemLink)}>
        <i className={`fa fa-envelope ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li> */}
  </ul>
)

export default SocialLinks