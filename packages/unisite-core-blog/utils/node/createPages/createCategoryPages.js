const { join } = require("path");
const { kebabCase } = require("lodash");
const { createPaginPages } = require("./utils");
const { getPosts, getCategories } = require("./queries");

module.exports = async function createCategoryPages(
  { actions, graphql },
  options
) {
  const { createPage } = actions;
  const categoryAllTemplate = require.resolve(
    "../../../src/templates/categories.tsx"
  );
  const categoryPostListTemplate = require.resolve(
    "../../../src/templates/category-post-list.tsx"
  );

  createPage({
    path: options.categoryListPrefix,
    component: categoryAllTemplate,
    context: {},
  });

  const categories = await getCategories({ graphql });

  for (const category of categories) {
    const posts = await getPosts({
      graphql,
      filter: { categories: { elemMatch: { id: { eq: category.id } } } },
    });

    await createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join(options.categoryPrefix, kebabCase(category.cid)),
      component: categoryPostListTemplate,
      map: {
        0: { path: join(options.categoryPrefix, kebabCase(category.cid)) },
      },
      contextPaginBuilder: async (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
};
