const { join } = require("path");
const { kebabCase } = require("lodash");
const { createPaginPages } = require("./utils");
const { getPosts, getUsers } = require("./queries");

module.exports = async function createUserPages({ actions, graphql }, options) {
  const { createPage } = actions;
  const userAllTemplate = require.resolve("../../../src/templates/users.tsx");
  const userPostListTemplate = require.resolve(
    "../../../src/templates/user-post-list.tsx"
  );

  createPage({
    path: options.userListPrefix,
    component: userAllTemplate,
    context: {},
  });

  const users = await getUsers({ graphql });

  for (const user of users) {
    const posts = await getPosts({
      graphql,
      filter: { authors: { elemMatch: { id: { eq: user.id } } } },
    });

    await createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join(options.userPrefix, kebabCase(user.uid)),
      component: userPostListTemplate,
      map: {
        0: { path: join(options.userPrefix, kebabCase(user.uid)) },
      },
      contextPaginBuilder: async (data) => ({
        user: user.id,
        posts: data.map((item) => item.id),
      }),
    });
  }
};
