const { Config, Env } = require("@unisite/utils");
const Joi = require("joi");
const chalk = require("chalk");

const schema = Joi.object({
  header: Joi.object({
    bar: {
      text: Joi.string().required(),
      closable: Joi.bool(),
    },
    nav: Joi.array().items(
      Joi.object({
        title: Joi.string().required(),
        link: Joi.string(),
        target: Joi.string(),
        items: Joi.array().items(
          Joi.object({
            title: Joi.string().required(),
            subTitle: Joi.string(),
            link: Joi.string(),
            target: Joi.string(),
          })
        ),
      })
    ),
  }),
});

async function createThemeConfigNode(
  rawThemeConfig,
  { actions, node, getNode, createContentDigest, createNodeId, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { value: themeConfig, error } = schema.validate(rawThemeConfig);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of themeConfig is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  const nodeId = createNodeId("UnisiteThemeConfig");

  createNode({
    ...(themeConfig ?? {}),
    id: nodeId,
    parent: node.id,
    children: [],
    internal: {
      type: "UnisiteThemeBlogConfig",
      contentDigest: createContentDigest(themeConfig),
      content: JSON.stringify(themeConfig),
      description: "Theme configuration for @unisite/theme-blog",
    },
  });

  createParentChildLink({ parent: node, child: getNode(nodeId) });
}

module.exports = async function onCreateNode(api, options) {
  const { node } = api;

  if (
    node.internal.mediaType === "text/yaml" &&
    node.sourceInstanceName === Env.UNISITE_CONTENT_NAME
  ) {
    await createThemeConfigNode(Config.get("themeConfig"), api, options);
  }
};
