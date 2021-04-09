const { join } = require("path");
const { createDetailPages, createPaginPages } = require("./utils");
const { getPosts } = require("./queries");

module.exports = async function createPostPages({ actions, graphql }, options) {
  const { createPage } = actions;
  const postTemplate = require.resolve("../../../src/templates/post.tsx");
  const postListTemplate = require.resolve(
    "../../../src/templates/post-list.tsx"
  );
  const posts = await getPosts({ graphql, edges: true });

  createDetailPages(posts, createPage, {
    pathPrefix: options.postPrefix,
    pathBuilder: ({ node }) => node?.slug || "",
    component: postTemplate,
    contextBuilder: ({ node, previous, next }) => ({
      id: node.id,
      previousId: previous?.id,
      previousPath: previous ? join("/post", previous.slug || "") : null,
      nextId: next?.id,
      nextPath: next ? join("/post", next.slug || "") : null,
    }),
  });

  createPaginPages(posts, createPage, {
    pageSize: 10,
    pathPrefix: options.postListPrefix,
    component: postListTemplate,
    map: {
      0: { path: "/" },
    },
    contextPaginBuilder: (data) => ({
      posts: data.map((item) => item?.node?.id),
    }),
  });
};
