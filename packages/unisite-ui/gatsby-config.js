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
    ],
  };
};
