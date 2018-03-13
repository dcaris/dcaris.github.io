import React from "react";
import PropTypes from "prop-types";

// Components
import Link from "gatsby-link";
import Post from '../components/Post'

const Tags = ({pathContext, data}) => {
  const {tag} = pathContext;
  const {edges, totalCount} = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
  totalCount === 1
    ? ""
    : "s"} tagged with "${tag}"`;

  const post = {
    frontmatter: {
      title: 'Tags',
      date: null
    }
  };
  return (
    <Post data={post} showMetadata={false}>
      <ul>
        {edges.map(({node}) => {
          const {path, title} = node.frontmatter;
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Post>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({tag: PropTypes.string.isRequired}),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({path: PropTypes.string.isRequired, title: PropTypes.string.isRequired})
        })
      }).isRequired)
    })
  })
};

export default Tags;

export const pageQuery = graphql `
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;