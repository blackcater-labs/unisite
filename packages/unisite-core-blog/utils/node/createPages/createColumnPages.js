const { join } = require("path");
const { kebabCase } = require("lodash");
const { getContents, getColumns } = require("./queries");

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

  createPage({
    path: options.columnListPrefix,
    component: columnAllTemplate,
    context: {},
  });

  const columns = await getColumns({ graphql });

  for (const column of columns) {
    const contents = await getContents({
      graphql,
      type: "column",
      filter: { column: { id: { eq: column.id } } },
    });

    createPage({
      path: join(options.columnPrefix, kebabCase(column.cid)),
      component: columnDetailTemplate,
      context: {
        id: column.id,
        contents: contents.map((content) => content.id),
      },
    });
  }
};
