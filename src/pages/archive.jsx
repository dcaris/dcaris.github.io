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
          const post = {
            id: k,
            frontmatter: {
              title: k,
              date: null
            }
          };
          return <Post data={post} showMetadata={false} key={k}>
            <ul>{_
                .each(grouped[k])
                .map(v => {
                  return <li key={v.node.frontmatter.title}>
                    <Link to={v.node.frontmatter.path}>{v.node.frontmatter.title}</Link>
                  </li>
                })}
            </ul>
          </Post>
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