import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import Post from '../components/Post'

const About = () => {
  const post = {
    frontmatter: {
      title: 'About Me',
      date: null
    }
  };
  return (
    <Post data={post} showMetadata={false}>
      <p>Hey, my name is Daniel Caris and I am a Software Developer from Gold Coast,
        Australia.</p>
      <p>I studied Information Technology at QUT and currently work at Virtus Health
        as a Senior Software Developer. .NET stack is my specialty, however am enjoying
        delving into the Node.js and Javascript world.</p>
      <p>In my spare time, I'm either looking after my children, being a fantastic
        husband, trying to be a handyman around the house, surfing, or watching sport of
        any time. I'm crazy about NRL, AFL, and NFL, but enjoy everything except cricket
        (I don't like cricket... oh no. I hate it)</p>
      <p>This site will contain my ramblings on items I'm keen to chat about. Trying
        to improve my Daily Fantasy Sports skills (DFS) so I'll be delving into the
        realm of sports analytics to try and gain an edge</p>
    </Post>
  );
}

export default About;