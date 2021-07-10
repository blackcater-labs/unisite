const path = require("path");

function resolvePath(relativePath) {
  return path.resolve(__dirname, "../src", relativePath || "");
}

module.exports = {
  stories: [
    "../{src,docs}/**/*.stories.mdx",
    "../{src,docs}/**/*.stories.(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            plugins: [require("autoprefixer")],
          },
        },
      },
    },
    "storybook-dark-mode/register",
  ],
  babel: async (options) => {
    // babel-plugin-import @icon-park/react
    options.plugins.push([
      "import",
      {
        libraryName: "@icon-park/react",
        libraryDirectory: "lib/icons",
        camel2DashComponentName: false,
      },
      "@icon-park/react",
    ]);
    // babel-plugin-import lodash
    options.plugins.push([
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "lodash",
    ]);

    return options;
  },
  webpackFinal: async (config) => {
    const alias = config.resolve.alias || {};

    config.resolve.alias = {
      ...alias,
      "@": resolvePath(""),
      "@styles": resolvePath("styles"),
      "@ui": resolvePath("components"),
      "@utils": resolvePath("utils"),
    };

    return config;
  },
};
