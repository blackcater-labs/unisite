const { createPaginPages } = require("./utils");
const { getPosts } = require("./queries");

module.exports = async function createArchivePages(
  { actions, graphql },
  options
) {
  const { createPage } = actions;
  const archivePostListTemplate = require.resolve(
    "../../../src/templates/archive-post-list.tsx"
  );
  const posts = await getPosts({ graphql, edges: true });

  await createPaginPages(posts, createPage, {
    pageSize: 20,
    pathPrefix: options.archiveListPrefix,
    component: archivePostListTemplate,
    map: {
      0: { path: options.archiveListPrefix },
    },
    contextPaginBuilder: async (data) => ({
      posts: data.map((item) => item?.node?.id),
    }),
  });
};
