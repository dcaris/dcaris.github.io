import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import styles from "../../styles/post.module.scss";

const Post = props => {
  const data = props.data;
  return (
    <article key={data.id}>
      <Helmet title={`Daniel Caris - ${data.frontmatter.title}`}/>
      <div className={styles.dcPost}>
        <h1 className={styles.dcPostTitle}>
          {data.frontmatter.path === undefined
            ? (data.frontmatter.title)
            : (
              <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
            )}
        </h1>
        {props.showMetadata === true && <div className={styles.dcPostMeta}>
          <span>
            <i className='fa fa-calendar'></i>{data.frontmatter.date}
          </span>
          {data.frontmatter.tags !== undefined && <span className={styles.dcPostMetaSpan}>
            <Link to={'/tags'}>
              <i className='fa fa-tag'></i>
            </Link>
            {data
              .frontmatter
              .tags
              .map((tag) => {
                return (
                  <Link to={`/tags/${tag}`} key={tag}>{tag}</Link>
                );
              })}
          </span>
}
        </div>
}
        <div className={styles.dcPostContent}>
          {props.children}
        </div>
      </div>
    </article>
  );
}

export default Post;