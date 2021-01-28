const themeVars = require("../antd-theme");

module.exports = {
  stories: [
    "../src/**/*.stories.{md,mdx}",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
  ],
  babel: async (options) => {
    // babel-plugin-import antd
    options.plugins.push([
      "import",
      { libraryName: "antd", style: true },
      "antd",
    ]);
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
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: { javascriptEnabled: true, modifyVars: themeVars },
          },
        },
      ],
    });

    return config;
  },
};
