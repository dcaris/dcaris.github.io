import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import tower from '../images/tower.jpg';

import {Grid, Row, Col} from 'react-flexbox-grid';
import {StyleSheet, css} from 'aphrodite';
import * as colours from '../styles/colours';
import * as viewports from '../styles/viewport';

const styles = StyleSheet.create({
  dcHome: {
    [viewports.atLeastTablet]: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + tower + ')',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      webkitFilter: 'grayscale(100%)',
      filter: 'grayscale(100%)'
    }
  },
  dcHomeParagraph: {
    margin: '10px',
    marginTop: '0',
    padding: '20px',
    fontSize: '20px',
    color: 'black',
    textAlign: 'justify',
    [viewports.atLeastTablet]: {
      position: 'absolute',
      bottom: '0',
      textAlign: 'left'
    }
  },
  dcHomeParagraphSpan: {
    [viewports.atLeastTablet]: {
      backgroundColor: 'white'
    }
  }
});

export default function Index() {
  return (
    <div className={css(styles.dcHome)}>
      <p className={css(styles.dcHomeParagraph)}>
        <span className={css(styles.dcHomeParagraphSpan)}>
          Hello! I am a software developer from Gold Coast, Australia. I work primarily
          using a .NET stack, but I love my Mac <i className="fa fa-smile-o"></i>
          <br />When I'm not coding, I'm parenting, surfing, or watch sports.
          <br /><b>This is my website</b>
        </span>
      </p>
    </div>
  );
}
