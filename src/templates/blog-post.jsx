import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import Post from '../components/Post'

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (<Post data={post} content={post.html} showMetadata={true}/>);
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;