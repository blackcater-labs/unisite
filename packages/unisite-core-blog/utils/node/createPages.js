const { join } = require("path");
const defaults = require("lodash/defaults");
const slice = require("lodash/slice");
const kebabCase = require("lodash/kebabCase");
const { getPosts, getTags, getColumns, getUsers } = require("./queries");

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
  const postTemplate = require.resolve("../../src/templates/post.tsx");
  const postListTemplate = require.resolve("../../src/templates/post-list.tsx");
  const posts = await getPosts({ graphql, edges: true });

  createDetailPages(posts, createPage, {
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

  createPaginPages(posts, createPage, {
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
}

// create tag pages
async function createTagPages({ graphql, createPage }) {
  const tagAllTemplate = require.resolve("../../src/templates/tags.tsx");
  const tagPostListTemplate = require.resolve(
    "../../src/templates/tag-post-list.tsx"
  );

  createPage({
    path: "/tags",
    component: tagAllTemplate,
    context: {},
  });

  const tags = await getTags({ graphql });

  for (const tag of tags) {
    const posts = await getPosts({
      graphql,
      filter: { tags: { elemMatch: { id: { eq: tag.id } } } },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join("/tag", kebabCase(tag.tid)),
      component: tagPostListTemplate,
      map: {
        0: { path: join("/tag", kebabCase(tag.tid)) },
      },
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
}

// create column pages
async function createColumnPages({ graphql, createPage }) {
  const columnAllTemplate = require.resolve("../../src/templates/columns.tsx");
  const columnDetailTemplate = require.resolve(
    "../../src/templates/column.tsx"
  );
  const columnPostListTemplate = require.resolve(
    "../../src/templates/column-post-list.tsx"
  );

  createPage({
    path: "/columns",
    component: columnAllTemplate,
    context: {},
  });

  const columns = await getColumns({ graphql });

  for (const column of columns) {
    const posts = await getPosts({
      graphql,
      type: "column",
      filter: { column: { id: { eq: column.id } } },
    });

    createPage({
      path: join("/column", kebabCase(column.cid)),
      component: columnDetailTemplate,
      context: { id: column.id },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join("/column", kebabCase(column.cid)),
      component: columnPostListTemplate,
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
}

// create user pages
async function createUserPages({ graphql, createPage }) {
  const userAllTemplate = require.resolve("../../src/templates/users.tsx");
  const userPostListTemplate = require.resolve(
    "../../src/templates/user-post-list.tsx"
  );

  createPage({
    path: "/users",
    component: userAllTemplate,
    context: {},
  });

  const users = await getUsers({ graphql });

  for (const user of users) {
    const posts = await getPosts({
      graphql,
      filter: { authors: { elemMatch: { id: { eq: user.id } } } },
    });

    createPaginPages(posts, createPage, {
      pageSize: 10,
      pathPrefix: join("/user", kebabCase(user.uid)),
      component: userPostListTemplate,
      map: {
        0: { path: join("/user", kebabCase(user.uid)) },
      },
      contextPaginBuilder: (data) => ({
        posts: data.map((item) => item.id),
      }),
    });
  }
}

// create archive pages
async function createArchivePages({ createPage }) {
  createPage({
    path: "/archives",
    component: require.resolve("../../src/templates/archives.tsx"),
    context: {},
  });
}

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions;

  await createPostPages({ graphql, createPage });
  await createTagPages({ graphql, createPage });
  await createColumnPages({ graphql, createPage });
  await createUserPages({ graphql, createPage });
  await createArchivePages({ graphql, createPage });
};
