import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

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

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <article className={css(styles.dcPost)} key={post.id}>
      <Helmet title={`Daniel Caris - ${post.frontmatter.title}`}/>
      <div className={css(styles.dcPost)}>
        <h1 className={css(styles.dcPostTitle)}>{post.frontmatter.title}</h1>
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
        <div
          className={css(styles.dcPostContent)}
          dangerouslySetInnerHTML={{
          __html: post.html
        }}/>
      </div>
    </article>
  );
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