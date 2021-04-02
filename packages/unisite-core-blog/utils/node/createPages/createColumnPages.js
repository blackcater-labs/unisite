const { join } = require("path");
const { kebabCase } = require("lodash");
const { createPaginPages } = require("./utils");
const { getPosts, getColumns } = require("./queries");

module.exports = async function createColumnPages(
  { actions, graphql },
  options
) {
  const { createPage } = actions;
  const columnAllTemplate = require.resolve(
    "../../../src/templates/columns.tsx"
  );
  const columnDetailTemplate = require.resolve(
    "../../../src/templates/column.tsx"
  );
  const columnPostListTemplate = require.resolve(
    "../../../src/templates/column-post-list.tsx"
  );

  createPage({
    path: "/columns",
    component: columnAllTemplate,
    context: {},
  });

  const columns = await getColumns({ graphql });

  for (const column of columns) {
    const posts = await getPosts({
      graphql,
      type: "column",
      filter: { column: { id: { eq: column.id } } },
    });

    createPage({
      path: join("/column", kebabCase(column.cid)),
      component: columnDetailTemplate,
      context: { id: column.id },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join("/column", kebabCase(column.cid)),
      component: columnPostListTemplate,
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
};