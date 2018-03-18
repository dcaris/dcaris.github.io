import React from "react";
import PropTypes from "prop-types";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Post from '../components/Post'

const _ = require('lodash');

const ArchivePage = props => {
  const {edges: posts} = props.data.allMarkdownRemark;
  var grouped = _.groupBy(posts, i => i.node.frontmatter.date);
  return (
    <div className="table">
      {_
        .keys(grouped)
        .sort()
        .reverse()
        .map(k => {
          return <div key={k}>
            <h2>{k}</h2>
            <ul>{_
                .each(grouped[k])
                .map(v => {
                  return <li key={v.node.frontmatter.title}>
                    <Link to={v.node.frontmatter.path}>{v.node.frontmatter.title}</Link>
                  </li>
                })}
            </ul>
          </div>
        })}
    </div>
  );
};

export default ArchivePage;

export const archiveQuery = graphql `
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } 
                      limit:200) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY")
            path
          }
        }
      }
    }
  }
`;