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
    path: "/category",
    component: categoryAllTemplate,
    context: {},
  });

  const categories = await getCategories({ graphql });

  for (const category of categories) {
    const posts = await getPosts({
      graphql,
      filter: { categories: { elemMatch: { id: { eq: category.id } } } },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join("/category", kebabCase(category.tid)),
      component: categoryPostListTemplate,
      map: {
        0: { path: join("/category", kebabCase(category.tid)) },
      },
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
};
