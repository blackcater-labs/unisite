const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const tailwindConfig = require(require.resolve("./tailwind.config.js"));

console.log(
  "tailwindConfig:",
  require.resolve("./tailwind.config.js"),
  tailwindConfig
);

module.exports = {
  plugins: [autoprefixer(), tailwind(tailwindConfig)],
};
