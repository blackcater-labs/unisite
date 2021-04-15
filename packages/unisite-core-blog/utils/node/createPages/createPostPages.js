const { createDetailPages, createPaginPages } = require("./utils");
const { getPosts } = require("./queries");

module.exports = async function createPostPages({ actions, graphql }, options) {
  const { createPage } = actions;
  const postTemplate = require.resolve("../../../src/templates/post.tsx");
  const postListTemplate = require.resolve(
    "../../../src/templates/post-list.tsx"
  );
  const posts = await getPosts({ graphql, edges: true });

  await createDetailPages(posts, createPage, {
    pathPrefix: options.postPrefix,
    pathBuilder: async ({ node }) => node?.slug || "",
    component: postTemplate,
    contextBuilder: async ({ node, previous, next }) => ({
      id: node.id,
      previousId: next?.id,
      nextId: previous?.id,
    }),
  });

  await createPaginPages(posts, createPage, {
    pageSize: 10,
    pathPrefix: options.postListPrefix,
    component: postListTemplate,
    map: {
      0: { path: "/" },
    },
    contextPaginBuilder: async (data) => ({
      posts: data.map((item) => item?.node?.id),
    }),
  });
};
