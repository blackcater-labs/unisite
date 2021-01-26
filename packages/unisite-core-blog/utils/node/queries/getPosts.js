const { jsonToGraphQLQuery: j2q, EnumType } = require("json-to-graphql-query");
const merge = require("lodash/merge");
const get = require("lodash/get");
const { isProd } = require("../../env");

module.exports = async function getPosts({
  graphql,
  type,
  edges,
  filter,
  sort,
}) {
  const draftFilter = isProd ? { draft: { ne: true } } : {};
  const defaultSort = {
    fields: [new EnumType("published_at"), new EnumType("updated_at")],
    order: new EnumType("DESC"),
  };
  const fields = edges
    ? {
        edges: {
          node: { id: true, slug: true },
          previous: { id: true },
          next: { id: true },
        },
      }
    : { nodes: { id: true } };

  type =
    type === "column"
      ? "allMdxColumnPost"
      : type === "blog"
      ? "allMdxBlogPost"
      : "allPost";
  filter = merge(filter || {}, draftFilter);
  sort = merge(sort || {}, defaultSort);

  const query = j2q(
    {
      query: {
        [type]: {
          __args: { filter, sort },
          ...fields,
        },
      },
    },
    { pretty: true }
  );
  const raw = await graphql(query);

  console.log(query);

  return edges
    ? get(raw, `data.${type}.edges`)
    : get(raw, `data.${type}.nodes`);
};
