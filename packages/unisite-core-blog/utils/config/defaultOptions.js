const { defaults } = require("lodash");

module.exports = (options) =>
  defaults(options, {
    contentName: "@blog",
    contentPath: "content",
    tagPrefix: "/tag",
    tagListPrefix: "/tags",
    userPrefix: "/user",
    userListPrefix: "/users",
    columnPrefix: "/column",
    columnListPrefix: "/columns",
    categoryPrefix: "/category",
    categoryListPrefix: "/categories",
    postPrefix: "/post",
    postListPrefix: "/list",
    archiveListPrefix: "/archive",
    categoryConfigFileName: "category",
    userConfigFileName: "user",
    tagConfigFileName: "tag",
    columnConfigFileName: "column",
  });
