const path = require("path");

function resolvePath(relativePath = "") {
  return path.resolve(__dirname, relativePath);
}

module.exports = [
  {
    resolve: {
      alias: {
        "@": resolvePath(),
        "@components": resolvePath("components"),
        "@styles": resolvePath("styles"),
      },
    },
  },
];
