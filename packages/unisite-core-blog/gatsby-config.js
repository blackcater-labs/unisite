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
          path: path.resolve(Path.root(), contentPath),
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
