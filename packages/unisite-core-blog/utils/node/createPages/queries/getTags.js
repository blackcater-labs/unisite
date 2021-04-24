const { jsonToGraphQLQuery: j2q } = require("json-to-graphql-query");
const { get } = require("lodash");

module.exports = async function getTags({ graphql }) {
  const query = j2q({
    query: {
      allTag: {
        nodes: { id: true, tid: true },
      },
    },
  });
  const raw = await graphql(query);

  return get(raw, "data.allTag.nodes") || [];
};
