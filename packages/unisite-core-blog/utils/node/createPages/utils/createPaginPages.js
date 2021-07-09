const { join } = require("path");
const { defaults, slice } = require("lodash");

// create pagination pages
module.exports = async function createPaginPages(arr, createPage, options) {
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
  const total = Math.max(Math.ceil(arr.length / pageSize), 1);

  const getPath = async (i, { pathBuilder, path, pathPrefix }) =>
    pathBuilder
      ? await pathBuilder(
          slice(arr, i * pageSize, (i + 1) * pageSize),
          { i, pageSize },
          arr
        )
      : path || (i === 0
      ? pathPrefix
      : join(pathPrefix, `${i}`));

  const getContext = async (i, { context, contextBuilder }) =>
    contextBuilder
      ? await contextBuilder(
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
    const left = i - 1 >= 0 ? i - 1 : null;
    const leftPath = i - 1 >= 0 ? "" : null;
    const right = i + 1 < total ? i + 1 : null;
    const rightPath = i + 1 < total ? "" : null;

    createPage({
      path: await getPath(i, { pathPrefix, path, pathBuilder }),
      component,
      context: {
        ...(await getContext(i, { context, contextBuilder })),
        ...(await getContext(i, {
          context: paginContext,
          contextBuilder: contextPaginBuilder,
        })),
        current: i,
        previous: left,
        previousPath: leftPath,
        next: right,
        nextPath: rightPath,
        total,
        pageSize,
      },
    });
  }
};
