const themeVars = require("./antd-theme");
const {
  plugins: postCssPlugins,
  ...postCssConfig
} = require("./postcss.config");

module.exports = () => {
  return {
    plugins: [
      {
        resolve: require.resolve("gatsby-plugin-postcss"),
        options: { ...postCssConfig, postCssPlugins },
      },
      {
        resolve: require.resolve("gatsby-plugin-less"),
        options: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: themeVars,
          },
        },
      },
    ],
  };
};
