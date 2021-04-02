const { jsonToGraphQLQuery: j2q } = require("json-to-graphql-query");
const { get } = require("lodash");

module.exports = async function getCategories({ graphql }) {
  const query = j2q({
    query: {
      allCategory: {
        nodes: { id: true, cid: true },
      },
    },
  });
  const raw = await graphql(query);

  return get(raw, "data.allCategory.nodes");
};
