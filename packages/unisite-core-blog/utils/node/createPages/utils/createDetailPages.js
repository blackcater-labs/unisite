const { join } = require("path");
const { defaults } = require("lodash");

// create detail pages
module.exports = async function createDetailPages(
  arr = [],
  createPage,
  options
) {
  const {
    pathPrefix,
    path,
    pathBuilder,
    component,
    context,
    contextBuilder,
  } = defaults(options, {
    pathPrefix: "/",
    path: "",
    pathBuilder: null,
    component: "",
    context: {},
    contextBuilder: null,
  });

  for (const item of arr) {
    createPage({
      path: join(pathPrefix, pathBuilder ? await pathBuilder(item, arr) : path),
      component,
      context:
        (contextBuilder ? await contextBuilder(item, arr) : context) || {},
    });
  }
};
