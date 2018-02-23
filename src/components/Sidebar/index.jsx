import React from 'react'
import Link from 'gatsby-link'

import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

import {StyleSheet, css} from 'aphrodite';
import * as colours from '../../styles/colours';
import * as viewports from '../../styles/viewport';

const styles = StyleSheet.create({
  dcSidebar: {
    float: 'none',
    display: 'block',
    backgroundColor: colours.colDefault,
    paddingBottom: '10px',
    textAlign: 'center',
    [viewports.atLeastTablet]: {
      height: '100%',
      textAlign: 'left',
    }

  },
  dcSideBarHeading: {
    padding: '40px',
    paddingBottom: '0px',
    marginLeft: '10px',
    marginTop: '0px',
    marginBottom: '10px',
    color: colours.fontHeading,
    fontFamily: 'Anton, sans-serif',
    fontSize: '79px',
    lineHeight: '0.95em',
    letterSpacing: 'normal',
    ':nth-of-type(2)': {
      marginTop: '-5px',
      paddingTop: '0px',
      paddingBottom: '5px'
    },
    [viewports.sm]: {
      fontSize: '59px',
      padding: '20px',
    },
    [viewports.md]: {
      fontSize: '59px',
      padding: '20px',
    },
  },
  dcSidebarHeadingLink: {
    color: 'white',
    transition: '0.5s ease',
    textDecoration: 'none',
    ':hover': {
      color: 'rgb(216, 214, 214)'
    }
  }
});

const Sidebar = () => (
  <div className={css(styles.dcSidebar)}>
    <h1 className={css(styles.dcSideBarHeading)}>MY NAME IS</h1>
    <h1 className={css(styles.dcSideBarHeading)}>
      <Link to="/" className={css(styles.dcSidebarHeadingLink)}>
        DANIEL CARIS
      </Link>
    </h1>

    <Navigation />
    <SocialLinks />
  </div>
)

export default Sidebar