const { defaults } = require("lodash");

module.exports = (options) =>
  defaults(options, {
    contentName: "@blog",
    contentPath: "content",
    userConfigFileName: "user",
    tagConfigFileName: "tag",
    columnConfigFileName: "column",
  });
