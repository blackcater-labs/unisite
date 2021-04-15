const defaultOptions = require("../../config/defaultOptions");
const createMdxPostNode = require("./createMdxPostNode");
const createMdxContentNode = require("./createMdxContentNode");
const createCategoryNodes = require("./createCategoryNodes");
const createUserNodes = require("./createUserNodes");
const createTagNodes = require("./createTagNodes");
const createColumnNodes = require("./createColumnNodes");

module.exports = async function onCreateNode(api, options) {
  options = defaultOptions(options);

  const { node, getNode } = api;

  if (node.internal.mediaType === "text/yaml") {
    if (node.name === options.categoryConfigFileName) {
      await createCategoryNodes(api, options);
    }

    if (node.name === options.userConfigFileName) {
      await createUserNodes(api, options);
    }

    if (node.name === options.tagConfigFileName) {
      await createTagNodes(api, options);
    }

    if (node.name === options.columnConfigFileName) {
      await createColumnNodes(api, options);
    }
  }

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);

    // 确保 MDX 文件来自于 @unisite/core-blog 中的 gatsby-source-filesystem
    if (fileNode && fileNode.sourceInstanceName === options.contentName) {
      if (fileNode.name && /^\_(.+)\_$/.test(fileNode.name)) {
        const type = /^\_(.+)\_$/.exec(fileNode.name)[1];

        await createMdxContentNode(type, api, options);
      } else {
        await createMdxPostNode(api, options);
      }
    }
  }
};
