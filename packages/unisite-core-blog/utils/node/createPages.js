const { join } = require("path");
const get = require("lodash/get");
const defaults = require("lodash/defaults");
const slice = require("lodash/slice");

// create detail pages
function createDetailPages(arr = [], createPage, options) {
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
      path: join(pathPrefix, pathBuilder ? pathBuilder(item, arr) : path),
      component,
      context: (contextBuilder ? contextBuilder(item, arr) : context) || {},
    });
  }
}

// create pagination pages
function createPaginPages(arr, createPage, options) {
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
}

// create post pages
async function createPostPages({ graphql, createPage }) {
  const draftFilter =
    process.env.NODE_ENV === "production"
      ? ", filter: {draft: {ne: true}}"
      : "";
  const postTemplate = require.resolve("../../src/templates/post.tsx");
  const postListTemplate = require.resolve("../../src/templates/post-list.tsx");

  // language=graphql
  const posts = await graphql(`
      query AllPostQuery {
        allPost(sort: { fields: [published_at, updated_at], order: DESC }${draftFilter}) {
          edges {
            node {
              id
              slug
            }
            previous {
              id
            }
            next {
              id
            }
          }
        }
      }
    `);
  const edges = get(posts, "data.allPost.edges");

  createPaginPages(edges, createPage, {
    pageSize: 10,
    pathPrefix: "/list",
    component: postListTemplate,
    map: {
      0: { path: "/" },
    },
    contextPaginBuilder: (data) => ({
      posts: data.map((item) => item.id),
    }),
  });

  createDetailPages(edges, createPage, {
    pathPrefix: "/post",
    pathBuilder: ({ node }) => node?.slug || "",
    component: postTemplate,
    contextBuilder: ({ node, previous, next }) => ({
      id: node.id,
      previousId: previous?.id,
      previousPath: previous ? join("/post", previous.slug || "") : null,
      nextId: next?.id,
      nextPath: next ? join("/post", next.slug || "") : null,
    }),
  });
}

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions;

  await createPostPages({ graphql, createPage });
  // tag 所有页
  // tag post 列表页，分页
  // column 所有页
  // column 详情页
  // author post 列表页
  // archive 页
  // search 页
};
