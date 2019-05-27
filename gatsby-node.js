const path = require("path")

exports.createPages = async ({ actions, graphql }) => {

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    actions.createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/service-template.js`),
      context: {},
    });

  });

}
