const Joi = require("joi");
const chalk = require("chalk");

module.exports = async function createMdxNode(
  { actions, node, getNode, createNodeId, createContentDigest, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { author, authors, category, categories, ...restFields } =
    node.frontmatter || {};
  const authorSet = new Set(authors || []);
  const categorySet = new Set(categories || []);

  if (author) {
    authorSet.add(author);
  }

  if (category) {
    categorySet.add(category);
  }

  const fields = {
    ...restFields,
    authors: [...authorSet.values()],
    categories: [...categorySet.values()],
  };
  const schema = Joi.object({
    title: Joi.string().required(),
    cover: Joi.string(),
    author: Joi.string(),
    authors: Joi.array().items(Joi.string().required()),
    categories: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string()),
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
      `${chalk.red.bold("frontmatter is not validate") 
        }\n    ${error.name} ${error.message}`
    );
    return;
  }

  const isColumnPost = !!data.column;

  if (isColumnPost) {
    data.order = data.order ?? 1000;
  }

  data.date_at = data.updated_at || data.published_at || "1970-01-01";

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
};
