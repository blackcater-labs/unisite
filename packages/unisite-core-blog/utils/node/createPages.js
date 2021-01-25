const path = require("path");
const get = require("lodash/get");

// create post pages
async function createPostPages({ graphql, createPage }) {
  const draftFilter =
    process.env.NODE_ENV === "production"
      ? ", filter: {draft: {ne: true}}"
      : "";
  const postTemplate = require.resolve("../../src/templates/post.tsx");

  // language=graphql
  const posts = await graphql(`
      query AllPostQuery {
        allPost(sort: { fields: [published_at, updated_at], order: DESC }${draftFilter}) {
          edges {
            node {
              id
              slug
            }
            previous {
              id
            }
            next {
              id
            }
          }
        }
      }
    `);
  const edges = get(posts, "data.allPost.edges");

  for (const { node, previous, next } of edges) {
    // detail page for post
    createPage({
      path: path.join("/post", node.slug),
      component: postTemplate,
      context: {
        id: node.id,
        previousId: previous?.id,
        nextId: next?.id,
      },
    });
  }
}

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions;

  await createPostPages({ graphql, createPage });
  // tag 所有页
  // tag post 列表页，分页
  // column 所有页
  // column 详情页
  // author post 列表页
  // archive 页
  // search 页
};
