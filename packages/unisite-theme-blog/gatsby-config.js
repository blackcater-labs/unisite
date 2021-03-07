module.exports = () => {
  return {
    plugins: [
      {
        resolve: require.resolve("@unisite/core-blog"),
        options: {},
      },
    ],
  };
};
