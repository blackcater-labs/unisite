const Joi = require("joi");
const chalk = require("chalk");

module.exports = async function createMdxContentNode(
  contentType,
  { actions, node, getNode, createNodeId, createContentDigest, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { column } = node.frontmatter || {};

  const fields = { column };
  const schema = Joi.object({
    column: Joi.string().required(),
  });
  const { value: data, error } = schema.validate(fields);

  if (error) {
    reporter.panic(
      `${chalk.red.bold("frontmatter is not validate") 
        }\n    ${error.name} ${error.message}`
    );
    return;
  }

  const type = "MdxColumnContent";
  const id = createNodeId(`${node.id} >>> ${type}`);

  createNode({
    ...data,
    type: contentType,
    id,
    parent: node.id,
    children: [],
    internal: {
      type,
      contentDigest: createContentDigest(data),
      content: JSON.stringify(data),
      description: `Mdx implementation of the "ColumnContent" interface`,
    },
  });

  createParentChildLink({ parent: node, child: getNode(id) });
};
