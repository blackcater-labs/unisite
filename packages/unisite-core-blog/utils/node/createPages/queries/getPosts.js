const { jsonToGraphQLQuery: j2q, EnumType } = require("json-to-graphql-query");
const { merge, get, defaults } = require("lodash");

module.exports = async function getPosts({
  graphql,
  type,
  edges,
  filter,
  sort,
}) {
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
  filter = defaults(filter || {}, { draft: { ne: true } });
  sort = defaults(sort || {}, {
    fields: new EnumType("date_at"),
    order: new EnumType("DESC"),
  });

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

  return edges
    ? get(raw, `data.${type}.edges`)
    : get(raw, `data.${type}.nodes`);
};
