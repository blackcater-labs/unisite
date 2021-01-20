module.exports = () => {
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postcssOptions: require(require.resolve("./src/postcss.config.js")),
        },
      },
    ],
  };
};
