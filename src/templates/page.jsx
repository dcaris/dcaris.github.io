import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Post from '../components/Post'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return null;
  }
};

export default function PageTemplate({data, pathContext}) {
  const {
    group,
    index,
    first,
    last,
    pageCount,
    pathPrefix
  } = pathContext;
  const previousUrl = index - 1 == 1
    ? `/${pathPrefix}`
    : `/${pathPrefix}/${index - 1}`.toString();
  const nextUrl = `/${pathPrefix}/${index + 1}`.toString();

  return (
    <div className="table">
      {group.map(({node}) => (
        <Post data={node} showMetadata={true} key={node.id}>
          <div dangerouslySetInnerHTML={{
            __html: node.excerpt
          }}/>
        </Post>
      ))}

      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Previous Page"/>
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Next Page"/>
      </div>
    </div>
  );
}