import React from 'react'
import Link from 'gatsby-link'

import {StyleSheet, css} from 'aphrodite';
import * as colours from '../../../styles/colours';
import * as viewports from '../../../styles/viewport';

const styles = StyleSheet.create({
  dcSidebarNav: {
    listStyle: 'none',
    fontSize: '20px',
    marginLeft: '0px',
    marginTop: '0',
    marginBottom: '10px',
    paddingLeft: '0px',
    textAlign: 'center',
    [viewports.atLeastTablet]: {
      marginLeft: '45px',
      fontSize: '40px'
    }
  },
  dcSidebarNavListItem: {
    display: 'inline-block',
    float: 'none',
    padding: '0px',
    [viewports.atLeastTablet]: {
      display: 'list-item',
      float: 'none',
      textAlign: 'left',
      marginBottom: '-10px'
    }
  },
  dcSidebarNavListItemLink: {
    borderBottom: '3px solid transparent',
    transition: '0.5s ease',
    color: 'rgb(45, 5, 92)',
    fontFamily: 'Anton, sans-serif',
    letterSpacing: 'normal',
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    marginRight: '10px',
    ':hover': {
      borderBottom: '3px solid ' + colours.colHighlight
    },
    [viewports.atLeastTablet]: {
      paddingLeft: '5px',
      borderLeft: '3px solid transparent',
      borderBottom: 'none',
      transition: '0.5s ease',
      ':hover': {
        borderLeft: '3px solid ' + colours.colHighlight,
        borderBottom: 'none'
      }
    }
  }
});

const Navigation = () => (
  <ul className={css(styles.dcSidebarNav)}>
    <li className={css(styles.dcSidebarNavListItem)}>
      <Link to="/blog" className={css(styles.dcSidebarNavListItemLink)}>
        Blog
      </Link>
    </li>
    <li className={css(styles.dcSidebarNavListItem)}>
      <Link to="/work" className={css(styles.dcSidebarNavListItemLink)}>
        Portfolio
      </Link>
    </li>
    <li className={css(styles.dcSidebarNavListItem)}>
      <Link to="/about" className={css(styles.dcSidebarNavListItemLink)}>
        About
      </Link>
    </li>
  </ul>
)

export default Navigation