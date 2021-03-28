const Joi = require("joi");
const chalk = require("chalk");

module.exports = (
  { actions, node, getNode, createNodeId, createContentDigest, reporter },
  options
) => {
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type !== `Mdx`) {
    console.log("type:", node.internal.type, node.internal.mediaType);
    return;
  }

  const fileNode = getNode(node.parent);

  if (fileNode && fileNode.sourceInstanceName === options.contentName) {
    const { author, authors, ...restFields } = node.frontmatter || {};
    const aset = new Set(authors || []);

    if (author) {
      aset.add(author);
    }

    const fields = {
      ...restFields,
      authors: [...aset.values()],
    };
    const schema = Joi.object({
      title: Joi.string().required(),
      cover: Joi.string(),
      author: Joi.string(),
      authors: Joi.array().items(Joi.string().required()),
      tags: Joi.array().items(Joi.string().required()),
      column: Joi.string(),
      published_at: Joi.alternatives().conditional("draft", {
        is: true,
        then: Joi.string(),
        otherwise: Joi.string().required(),
      }),
      updated_at: Joi.string(),
      slug: Joi.string(),
      draft: Joi.bool().default(false),
    });
    const { value: data, error } = schema.validate(fields);

    if (error) {
      reporter.panic(
        chalk.red.bold("frontmatter is not validate") +
          `\n    ${error.name} ${error.message}`
      );
      return;
    }

    const isColumnPost = !!data.column;
    const type = isColumnPost ? "MdxColumnPost" : "MdxBlogPost";
    const id = createNodeId(`${node.id} >>> ${type}`);

    createNode({
      ...data,
      id,
      parent: node.id,
      children: [],
      internal: {
        type,
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: `Mdx implementation of the ${
          isColumnPost ? "ColumnPost" : "BlogPost"
        } interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(id) });
  }
};
