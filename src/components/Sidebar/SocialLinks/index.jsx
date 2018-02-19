import React from 'react'
import Link from 'gatsby-link'

import {StyleSheet, css} from 'aphrodite';
import * as colours from '../../../styles/colours';
import * as viewports from '../../../styles/viewport';

const styles = StyleSheet.create({
  dcSidebarSocial: {
    listStyle: 'none',
    fontSize: '20px',
    padding: '0',
    textAlign: 'center'
  },
  dcSidebarSocialListItem: {
    display: 'inline-block',
    float: 'none',
    padding: '5px',
    fontSize: '20px'
  },
  dcSidebarSocialListItemLink: {
    borderBottom: '3px solid transparent',
    transition: '0.5s ease',
    color: colours.colHighlight,
    textDecorationLine: 'none',
    marginRight: '10px',
    ':hover': {
      borderBottom: '3px solid ' + colours.colHighlight
    }
  },
  dcSidebarSocialListItemLinkIcon: {
    color: 'black',
    ':hover': {
      color: colours.colHighlight,
      cursor: 'pointer'
    }
  }

  //   >li {       >a {           >i {           }       } >.nav-divider-icon {
  //     color: $colDefault;       }   }
});

const SocialLinks = () => (
  <ul className={css(styles.dcSidebarSocial)}>
    <li className={css(styles.dcSidebarSocialListItem)}>
      <Link to="http://www.twitter.com/dcaris">
        <i className={`fa fa-twitter ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li>
    <li className={css(styles.dcSidebarSocialListItem)}>
      <Link
        to="http://www.github.com/dcaris"
        className={css(styles.dcSidebarSocialListItemLink)}>
        <i className={`fa fa-github ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li>
    <li className={css(styles.dcSidebarSocialListItem)}>
      <Link
        to="http://www.instagram.com/dcaris"
        className={css(styles.dcSidebarSocialListItemLink)}>
        <i className={`fa fa-instagram ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li>
    <li className={css(styles.dcSidebarSocialListItem)}>
      <Link
        to="https://www.linkedin.com/in/daniel-caris-1501b122/"
        className={css(styles.dcSidebarSocialListItemLink)}>
        <i className={`fa fa-linkedin ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li>
    <li className={css(styles.dcSidebarSocialListItem)}>
      <Link to="/contact" className={css(styles.dcSidebarSocialListItemLink)}>
        <i className={`fa fa-envelope ` + css(styles.dcSidebarSocialListItemLinkIcon)}></i>
      </Link>
    </li>
  </ul>
)

export default SocialLinks