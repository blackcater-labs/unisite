const { jsonToGraphQLQuery: j2q, EnumType } = require("json-to-graphql-query");
const merge = require("lodash/merge");
const get = require("lodash/get");
const { isProd } = require("../../env");

module.exports = async function getPosts({ graphql, filter, sort, edges }) {
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

  filter = merge(filter || {}, draftFilter);
  sort = merge(sort || {}, defaultSort);

  const query = j2q(
    {
      query: {
        allPost: {
          __args: { filter, sort },
          ...fields,
        },
      },
    },
    { pretty: true }
  );
  const raw = await graphql(query);

  return edges
    ? get(raw, "data.allPost.edges")
    : get(raw, "data.allPost.nodes");
};
