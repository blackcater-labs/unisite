module.exports = ({ createResolvers }) => {
  createResolvers({
    Tag: {
      columns: {
        type: ["Column!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  tags: {
                    elemMatch: {
                      tid: { eq: source.tid },
                    },
                  },
                },
              },
              type: "Column",
              firstOnly: false,
            },
            { connectionType: "Column" }
          );
        },
      },
      posts: {
        type: ["Post!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  tags: {
                    elemMatch: {
                      tid: { eq: source.tid },
                    },
                  },
                },
              },
              type: "Post",
              firstOnly: false,
            },
            { connectionType: "Post" }
          );
        },
      },
      postCount: {
        type: "Int!",
        resolve: async (source, args, context) => {
          const posts = await context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  tags: {
                    elemMatch: {
                      tid: { eq: source.tid },
                    },
                  },
                },
              },
              type: "Post",
              firstOnly: false,
            },
            { connectionType: "Post" }
          );

          return (posts || []).length;
        },
      },
    },
    Column: {},
    Writer: {
      groups: {
        type: ["Group!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  members: {
                    elemMatch: {
                      uid: { eq: source.uid },
                    },
                  },
                },
              },
              type: "Group",
              firstOnly: false,
            },
            { connectionType: "Group" }
          );
        },
      },
      columns: {
        type: ["Column!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  authors: {
                    elemMatch: {
                      uid: { eq: source.uid },
                    },
                  },
                },
              },
              type: "Column",
              firstOnly: false,
            },
            { connectionType: "Column" }
          );
        },
      },
      posts: {
        type: ["Post!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  authors: {
                    elemMatch: {
                      uid: { eq: source.uid },
                    },
                  },
                },
              },
              type: "Post",
              firstOnly: false,
            },
            { connectionType: "Post" }
          );
        },
      },
    },
    Group: {
      columns: {
        type: ["Column!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  authors: {
                    elemMatch: {
                      uid: { eq: source.uid },
                    },
                  },
                },
              },
              type: "Column",
              firstOnly: false,
            },
            { connectionType: "Column" }
          );
        },
      },
      posts: {
        type: ["Post!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                filter: {
                  authors: {
                    elemMatch: {
                      uid: { eq: source.uid },
                    },
                  },
                },
              },
              type: "Post",
              firstOnly: false,
            },
            { connectionType: "Post" }
          );
        },
      },
    },
  });
};
