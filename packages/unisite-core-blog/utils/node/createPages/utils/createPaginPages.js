const { join } = require("path");
const { defaults, slice } = require("lodash");

// create pagination pages
module.exports = function createPaginPages(arr, createPage, options) {
  const {
    pageSize,
    pathPrefix,
    component,
    context,
    contextBuilder,
    contextPaginBuilder,
    map,
  } = defaults(options, {
    pageSize: 10,
    pathPrefix: "/",
    component: "",
    context: {},
    contextBuilder: null,
    contextPaginBuilder: null,
    map: {},
  });
  const total = Math.ceil(arr.length / pageSize);

  if (total <= 0) return;

  const getPath = (i, { pathBuilder, path, pathPrefix }) =>
    pathBuilder
      ? pathBuilder(
          slice(arr, i * pageSize, (i + 1) * pageSize),
          { i, pageSize },
          arr
        )
      : path
      ? path
      : i === 0
      ? pathPrefix
      : join(pathPrefix, `${i}`);

  const getContext = (i, { context, contextBuilder }) =>
    contextBuilder
      ? contextBuilder(
          slice(arr, i * pageSize, (i + 1) * pageSize),
          { i, pageSize },
          arr
        )
      : context;

  for (let i = 0; i < total; i++) {
    const { path, pathBuilder, context: paginContext } = defaults(
      map[i] || {},
      {
        path: "",
        pathBuilder: null,
        context: {},
      }
    );

    createPage({
      path: getPath(i, { pathPrefix, path, pathBuilder }),
      component,
      context: {
        ...getContext(i, { context, contextBuilder }),
        ...getContext(i, {
          context: paginContext,
          contextBuilder: contextPaginBuilder,
        }),
        current: i,
        previous: i - 1 >= 0 ? i - 1 : null,
        previousPath: i - 1 >= 0 ? "" : null,
        next: i + 1 < total ? i + 1 : null,
        nextPath: i + 1 < total ? "" : null,
        total,
        pageSize,
      },
    });
  }
};
