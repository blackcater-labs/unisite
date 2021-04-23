const Joi = require("joi");
const chalk = require("chalk");

const schema = Joi.array()
  .items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
    })
  )
  .unique((a, b) => a.id === b.id);

module.exports = async function createTagNodes(
  rawTags,
  { actions, node, getNode, createContentDigest, createNodeId, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { value: tags, error } = schema.validate(rawTags);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of tag is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const tag of tags) {
    const { id, ...rest } = tag;
    const data = {
      ...rest,
      tid: id,
    };
    const nodeId = createNodeId(`${data.tid} >>> Tag`);

    createNode({
      ...data,
      id: nodeId,
      parent: node.id,
      children: [],
      internal: {
        type: "Tag",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Tag implementation of the Node interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(nodeId) });
  }
};
