const { join } = require("path");
const { kebabCase } = require("lodash");
const { createPaginPages } = require("./utils");
const { getPosts, getTags } = require("./queries");

module.exports = async function createTagPages({ actions, graphql }, options) {
  const { createPage } = actions;
  const tagAllTemplate = require.resolve("../../../src/templates/tags.tsx");
  const tagPostListTemplate = require.resolve(
    "../../../src/templates/tag-post-list.tsx"
  );

  createPage({
    path: options.tagListPrefix,
    component: tagAllTemplate,
    context: {},
  });

  const tags = await getTags({ graphql });

  for (const tag of tags) {
    const posts = await getPosts({
      graphql,
      filter: { tags: { elemMatch: { id: { eq: tag.id } } } },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join(options.tagPrefix, kebabCase(tag.tid)),
      component: tagPostListTemplate,
      map: {
        0: { path: join(options.tagPrefix, kebabCase(tag.tid)) },
      },
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
};
