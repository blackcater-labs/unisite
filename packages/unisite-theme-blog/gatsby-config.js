module.exports = () => {
  return {
    plugins: [
      "@unisite/core-blog",
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postCssPlugins: [
            require("autoprefixer"),
            require("tailwindcss")(require("./tailwind.config")),
          ],
        },
      },
    ],
  };
};
