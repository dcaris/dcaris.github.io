/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`);

    return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`)
        .then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }

            result.data.allMarkdownRemark.edges
                .forEach(({ node }) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: blogPostTemplate,
                        context: {} // additional data can be passed via context
                    });
                });
        });
}

exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        case "develop":
            config.loader("css", {
                include: /flexboxgrid/,
            });

            break;

        case "build-css":
            config.loader("css", {
                include: /flexboxgrid/,
            });

            break;

        case "build-html":
            config.loader("css", {
                include: /flexboxgrid/,
            });

            break;

        case "build-javascript":
            config.loader("css", {
                include: /flexboxgrid/,
            });

            break;
    }

    return config;
};