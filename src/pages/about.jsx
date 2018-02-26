import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import Post from '../components/Post'

const About = () => {
  const post = {
    html: `The page is all about me`,
    frontmatter: {
      title: 'About Me',
      date: null
    }
  };
  return (<Post data={post} content={post.html} showMetadata={false}/>);
}

export default About;