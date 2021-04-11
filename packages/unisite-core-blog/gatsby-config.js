const path = require("path");
const { Path } = require("@unisite/utils");
const defaultOptions = require("./utils/config/defaultOptions");

module.exports = (options) => {
  const { contentName, contentPath } = defaultOptions(options);

  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: contentName,
          path: `${path.resolve(Path.root(), contentPath)}/`,
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 1280,
                disableBgImageOnAlpha: true,
              },
            },
            {
              resolve: "gatsby-remark-copy-linked-files",
              options: {},
            },
            {
              resolve: "gatsby-remark-autolink-headers",
              options: { icon: false },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {},
            },
          ],
        },
      },
      // "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-typescript",
    ],
  };
};
