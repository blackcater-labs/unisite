const defaultOptions = require("../config/defaultOptions");

module.exports = ({ actions, createContentDigest }, options) => {
  const { createNode } = actions;

  options = defaultOptions(options);

  const coreBlogConfig = {
    tagPrefix: options.tagPrefix,
    tagListPrefix: options.tagListPrefix,
    userPrefix: options.userPrefix,
    userListPrefix: options.userListPrefix,
    columnPrefix: options.columnPrefix,
    columnListPrefix: options.columnListPrefix,
    categoryPrefix: options.categoryPrefix,
    categoryListPrefix: options.categoryListPrefix,
    postPrefix: options.postPrefix,
    postListPrefix: options.postListPrefix,
    archivesPrefix: options.archivesPrefix,
  };

  createNode({
    ...coreBlogConfig,
    id: `@unisite/core-blog`,
    parent: null,
    children: [],
    internal: {
      type: `UnisiteCoreBlogConfig`,
      contentDigest: createContentDigest(coreBlogConfig),
      content: JSON.stringify(coreBlogConfig),
      description: `Configuration for @unisite/core-blog`,
    },
  });
};
