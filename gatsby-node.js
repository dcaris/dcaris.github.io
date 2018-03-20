/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const _ = require('lodash');
const createPaginatedPages = require("gatsby-paginate");

/**
 * Function for creating Post pages
 */
const createPosts = (createPage, posts) => {
    const postTemplate = path.resolve(`src/templates/post.jsx`);

    posts.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: postTemplate,
            context: {} // additional data can be passed via context
        });
    });
};

/**
 * Function for creating Tags pages
 */
const createTags = (createPage, posts) => {
    const tagTemplate = path.resolve("src/templates/tags.jsx");

    // Tag pages:
    let tags = [];

    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags);
        }
    });

    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
                tag
            }
        });
    });
};

const createPagination = (createPage, posts) => {
    createPaginatedPages({
        edges: posts,
        createPage: createPage,
        pageTemplate: "src/templates/page.jsx",
        pageLength: 5,
        pathPrefix: "blog",
        buildPath: (index, pathPrefix) => index > 1 ?
            `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });
}

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

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
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;
        createPosts(createPage, posts);
        createTags(createPage, posts);
        createPagination(createPage, posts);
    });
}

exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        case "develop":
            config.loader("css", { include: /flexboxgrid/ });
            break;

        case "build-css":
            config.loader("css", { include: /flexboxgrid/ });
            break;

        case "build-html":
            config.loader("css", { include: /flexboxgrid/ });
            break;

        case "build-javascript":
            config.loader("css", { include: /flexboxgrid/ });
            break;
    }

    return config;
};