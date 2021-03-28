module.exports = () => {
  return {
    plugins: [
      {
        resolve: require.resolve("@unisite/core-blog"),
        options: {},
      },
      {
        resolve: require.resolve("gatsby-plugin-postcss"),
        options: {},
      },
    ],
  };
};
