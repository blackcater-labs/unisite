const { jsonToGraphQLQuery: j2q } = require("json-to-graphql-query");
const { get } = require("lodash");

module.exports = async function getColumns({ graphql }) {
  const query = j2q({
    query: {
      allColumn: {
        nodes: { id: true, cid: true },
      },
    },
  });
  const raw = await graphql(query);

  return get(raw, "data.allColumn.nodes");
};
