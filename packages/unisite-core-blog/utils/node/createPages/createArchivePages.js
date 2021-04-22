module.exports = async function createArchivePages(
  { actions, graphql },
  options
) {
  const { createPage } = actions;
  const archivesTemplate = require.resolve(
    "../../../src/templates/archives.tsx"
  );

  await createPage({
    path: options.archivesPrefix,
    component: archivesTemplate,
    context: {},
  });
};
