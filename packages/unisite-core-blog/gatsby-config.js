module.exports = (options) => {
  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: options.contentName,
          path: options.contentPath,
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: { extensions: [`.mdx`, `.md`] },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      "gatsby-plugin-typescript",
    ],
  };
};
