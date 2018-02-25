import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import {Grid, Row, Col} from 'react-flexbox-grid';
import {StyleSheet, css} from 'aphrodite';
import * as colours from '../styles/colours';
import * as viewports from '../styles/viewport';

const styles = StyleSheet.create({
  dcPost: {
    margin: '0',
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    fontSize: '18px',
    [viewports.atLeastTablet]: {
      margin: '20px',
      marginTop: '40px'
    }
  },
  dcPostTitle: {
    fontFamily: 'Droid Serif, serif',
    fontWeight: '800',
    fontSize: '40px',
    lineHeight: '1em',
    textDecorationLine: 'none',
    color: colours.fontDefault,
    margin: '0',
    marginBottom: '10px',
    [viewports.atLeastTablet]: {
      marginTop: '10px',
      fontSize: '60px'
    }
  },
  dcPostTitleLink: {
    color: colours.fontDefault,
    transition: '0.5s ease',
    textDecorationLine: 'none',
    ':hover ': {
      color: colours.fontHighlight,
      textDecorationLine: 'none'
    }
  },
  dcPostTitleIcon: {
    fontSize: '30px',
    verticalAlign: 'middle'
  },
  dcPostMeta: {
    color: 'rgb(187, 183, 183)'
  },
  dcPostMetaSpan: {
    textDecorationLine: 'none',
    marginRight: '10px'
  },
  dcPostMetaSpanIcon: {
    marginRight: '10px',
    marginRight: '5px'
  },
  dcPostMetaSpanLink: {
    color: 'rgb(187, 183, 183)',
    transition: '0.5s ease',
    ':hover': {
      textDecorationLine: 'none',
      color: 'rgb(131, 128, 128)'
    }
  },
  dcPostContent: {
    marginTop: '10px'
  }
});

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div className="table">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          return (
            <article className={css(styles.dcPost)} key={post.id}>
              <Helmet title={`Daniel Caris - ${post.frontmatter.title}`}/>
              <div className={css(styles.dcPost)}>
                <h1 className={css(styles.dcPostTitle)}>
                  <Link to={post.frontmatter.path} className={css(styles.dcPostTitleLink)}>{post.frontmatter.title}</Link>
                </h1>
                <div className={css(styles.dcPostMeta)}>
                  <span className={css(styles.dcPostMetaSpan)}>
                    <i className={`fa fa-calendar ` + css(styles.dcPostMetaSpanIcon)}></i>{post.frontmatter.date}</span>
                  {/* <span className="category"><i className="fa fa-bookmark"></i>
                      category
                    </span>
                    <span class="tag"><i class="fa fa-tag"></i>
                        tags
                    </span> */}
                </div>
                <p>{post.excerpt}</p>
              </div>
            </article>
          );
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