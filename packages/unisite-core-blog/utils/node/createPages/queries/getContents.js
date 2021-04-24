const { jsonToGraphQLQuery: j2q } = require("json-to-graphql-query");
const { get } = require("lodash");

module.exports = async function getContents({ graphql, type, filter }) {
  type = type === "column" ? "allMdxColumnContent" : "allMdxColumnContent";
  filter = filter || {};

  const query = j2q({
    query: {
      [type]: {
        __args: { filter },
        nodes: { id: true },
      },
    },
  });
  const raw = await graphql(query);

  return get(raw, `data.${type}.nodes`) || [];
};
