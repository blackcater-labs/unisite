const Joi = require("joi");
const chalk = require("chalk");
const { load } = require("js-yaml");

const schema = Joi.array()
  .items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      cover: Joi.string(),
      tags: Joi.array().items(Joi.string().required()),
      authors: Joi.array().items(Joi.string().required()),
    })
  )
  .unique((a, b) => a.id === b.id);

module.exports = async function createColumnNodes(
  {
    actions,
    node,
    getNode,
    loadNodeContent,
    createContentDigest,
    createNodeId,
    reporter,
  },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const rawColumns = load(await loadNodeContent(node));
  const { value: columns, error } = schema.validate(rawColumns);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of column is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const column of columns) {
    const { id, ...rest } = column;
    const data = {
      ...rest,
      cid: id,
    };
    const nodeId = createNodeId(`${data.cid} >>> Column`);

    createNode({
      ...data,
      id: nodeId,
      parent: node.id,
      children: [],
      internal: {
        type: "Column",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Column implementation of the Node interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(nodeId) });
  }
};
