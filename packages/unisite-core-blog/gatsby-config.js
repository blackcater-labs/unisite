const path = require("path");
const { Env, Path } = require("@unisite/utils");
const defaultOptions = require("./utils/config/defaultOptions");

module.exports = (options) => {
  const { contentName, contentPath } = defaultOptions(options);

  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: contentName,
          path: `${path.resolve(Path.rootPath, contentPath)}/`,
        },
      },
      Path.configPath
        ? {
            resolve: "gatsby-source-filesystem",
            options: { name: Env.UNISITE_CONTENT_NAME, path: Path.configPath },
          }
        : false,
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: { maxWidth: 1280, disableBgImageOnAlpha: true },
            },
            "gatsby-remark-copy-linked-files",
            {
              resolve: "gatsby-remark-autolink-headers",
              options: {
                isIconAfterHeader: true,
                icon: `<svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(6.000000, 5.500000)">
      <path d="M0,10.5 L36,10.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" fill="none" fill-rule="evenodd"/>
      <path d="M-8,18.5 L28,18.5" transform="translate(10.000000, 18.500000) rotate(90.000000) translate(-10.000000, -18.500000) " stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" fill="none" fill-rule="evenodd"/>
      <path d="M8,18.5 L44,18.5" transform="translate(26.000000, 18.500000) rotate(90.000000) translate(-26.000000, -18.500000) " stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" fill="none" fill-rule="evenodd"/>
      <path d="M0,26.5 L36,26.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" fill="none" fill-rule="evenodd"/>
    </g>
  </g>
</svg>`,
              },
            },
            "gatsby-remark-mermaid",
            "@unisite/gatsby-remark-prismjs",
            "gatsby-remark-responsive-iframe",
          ],
          rehypePlugins: [require("rehype-katex")],
          remarkPlugins: [require("remark-math")],
        },
      },
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-typescript",
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: { modules: ["gatsby-plugin-image"] },
      },
    ].filter(Boolean),
  };
};
