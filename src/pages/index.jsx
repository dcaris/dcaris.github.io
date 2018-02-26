import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Post from '../components/Post'

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div className="table">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          return (<Post data={post} content={post.excerpt} showMetadata={true} key={post.id}/>);
        })}
    </div>
  );
}

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;