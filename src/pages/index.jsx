import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import styles from '../styles/site.module.scss';
import tower from '../images/tower.jpg';

export default function Index() {
  return (
    <div className={styles.dcHome}>
      <p>
        <span>
          Hello! I am a software developer from Gold Coast, Australia. I work primarily
          using a .NET stack, but I love my Mac <i className="fa fa-smile-o"></i>
          <br />When I'm not coding, I'm parenting, surfing, or watch sports.
          <br /><b>This is my website</b>
        </span>
      </p>
    </div>
  );
}
