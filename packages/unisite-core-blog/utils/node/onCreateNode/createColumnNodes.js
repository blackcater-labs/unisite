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
      categories: Joi.array().items(Joi.string().required()),
      chapters: Joi.array().items(Joi.any().required()),
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
    const { id, author, authors, category, categories, ...rest } = column;
    const authorSet = new Set(authors || []);
    const categorySet = new Set(categories || []);

    if (author) {
      authorSet.add(author);
    }

    if (category) {
      categorySet.add(category);
    }

    const data = {
      ...rest,
      cid: id,
      authors: [...authorSet.values()],
      categories: [...categorySet.values()],
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
