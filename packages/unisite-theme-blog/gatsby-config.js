module.exports = () => {
  return {
    plugins: [
      "@unisite/core-blog",
      "@unisite/gatsby-plugin-dark-mode",
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postCssPlugins: [
            require("autoprefixer"),
            require("tailwindcss")(require("./tailwind.config")),
          ],
        },
      },
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: { modules: ["@unisite/gatsby-plugin-dark-mode"] },
      },
    ],
  };
};
