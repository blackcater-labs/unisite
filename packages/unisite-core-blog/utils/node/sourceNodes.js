const path = require("path");
const Joi = require("joi");
const chalk = require("chalk");
const { Config, Path } = require("@unisite/utils");

function createTagNodes({
  contentPath,
  createNode,
  createNodeId,
  createContentDigest,
  reporter,
}) {
  const module = path.relative(Path.root(), path.resolve(contentPath, "tag"));
  const tags = Config.get(module);
  const schema = Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    })
  );
  const { value: list, error } = schema.validate(tags);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of tags is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const item of list) {
    const data = {
      tid: item.id,
      name: item.name,
    };

    createNode({
      ...data,
      id: createNodeId(`${data.tid} >>> Tag`),
      parent: null,
      children: [],
      internal: {
        type: "Tag",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Tag implementation of the Node interface",
      },
    });
  }
}

module.exports = (
  { actions, createContentDigest, createNodeId, reporter },
  options
) => {
  const { createNode } = actions;
  const contentPath = path.resolve(Path.root(), options.contentPath);

  createTagNodes({
    contentPath,
    createNode,
    createNodeId,
    createContentDigest,
    reporter,
  });
};
