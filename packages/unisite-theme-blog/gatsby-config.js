const path = require("path");

module.exports = () => {
  return {
    plugins: [
      "@unisite/core-blog",
      "@unisite/gatsby-plugin-dark-mode",
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postCssPlugins: [require("autoprefixer")],
        },
      },
      {
        resolve: "gatsby-plugin-windicss",
        options: {
          // root: __dirname,
          config: path.resolve(__dirname, "windi.config.js"),
        },
      },
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: { modules: ["@unisite/gatsby-plugin-dark-mode"] },
      },
    ],
  };
};
