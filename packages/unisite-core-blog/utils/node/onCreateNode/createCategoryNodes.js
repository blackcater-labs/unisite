const Joi = require("joi");
const chalk = require("chalk");

const schema = Joi.array()
  .items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    })
  )
  .unique((a, b) => a.id === b.id);

module.exports = async function createCategoryNodes(
  rawCategories,
  { actions, node, getNode, createContentDigest, createNodeId, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { value: categories, error } = schema.validate(rawCategories);

  if (error) {
    reporter.panic(
      `${chalk.red.bold("Configuration of category is invalid") 
        }\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const category of categories) {
    const { id, ...rest } = category;
    const data = {
      ...rest,
      cid: id,
    };
    const nodeId = createNodeId(`${data.cid} >>> Category`);

    createNode({
      ...data,
      id: nodeId,
      parent: node.id,
      children: [],
      internal: {
        type: "Category",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Category implementation of the Node interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(nodeId) });
  }
};
