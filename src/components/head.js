import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
            }
        }
    }
`

const Head = ({ title, description, image}) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang="en" />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            
            <meta name="og:url" content={seo.url} />
            <meta name="og:type" content="website" />
            <meta name="og:description" content={seo.description} />
            <meta name="og:image" content={seo.image} />
            <meta name="og:title" content={seo.title} />

            <meta name="twitter:url" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:title" content={seo.title} />
        </Helmet>
    );
}

export default Head

/**
 * Define prop types for site metadata (GraphQL)
 */
Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

/**
 * Define defaults for site metadata (GraphQL)
 */
Head.defaultProps = {
    title: null,
    description: null,
    image: null,
}