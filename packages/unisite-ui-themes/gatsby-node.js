// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateBabelConfig
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "babel-plugin-import",
    options: { libraryName: "antd", style: true },
  });
};
