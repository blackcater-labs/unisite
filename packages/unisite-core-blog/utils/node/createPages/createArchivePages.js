module.exports = async function createArchivePages({ actions }, options) {
  const { createPage } = actions;

  createPage({
    path: "/archives",
    component: require.resolve("../../../src/templates/archives.tsx"),
    context: {},
  });
};
