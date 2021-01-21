const path = require("path");
const { Path } = require("@unisite/utils");
const defaultOptions = require("./utils/config/defaultOptions");

module.exports = (options) => {
  const { contentName, contentPath } = defaultOptions(options);

  return {
    plugins: [
      {
        resolve: require.resolve("gatsby-source-filesystem"),
        options: {
          name: contentName,
          path: `${path.resolve(Path.root(), contentPath)}/`,
        },
      },
      {
        resolve: require.resolve("gatsby-plugin-mdx"),
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      {
        resolve: require.resolve("gatsby-transformer-sharp"),
        options: {},
      },
      {
        resolve: require.resolve("gatsby-plugin-sharp"),
        options: {},
      },
      {
        resolve: require.resolve("gatsby-plugin-typescript"),
        options: {},
      },
    ],
  };
};
