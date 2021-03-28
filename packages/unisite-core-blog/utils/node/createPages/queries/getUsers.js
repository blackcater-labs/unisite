const { jsonToGraphQLQuery: j2q } = require("json-to-graphql-query");
const { get } = require("lodash");

module.exports = async function getUsers({ graphql }) {
  const query = j2q({
    query: {
      allUser: {
        nodes: { id: true, uid: true },
      },
    },
  });
  const raw = await graphql(query);

  return get(raw, "data.allUser.nodes");
};
