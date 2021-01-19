module.exports = ({ createResolvers }) => {
  createResolvers({
    Tag: {
      columns: {
        type: ["Column!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                tags: {
                  elemMatch: {
                    tid: { eq: source.tid },
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
    },
    Column: {},
    Writer: {
      groups: {
        type: ["Group!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                members: {
                  elemMatch: {
                    uid: { eq: source.uid },
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
                authors: {
                  elemMatch: {
                    uid: { eq: source.uid },
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
    },
    Group: {
      columns: {
        type: ["Column!"],
        resolve(source, args, context) {
          return context.nodeModel.runQuery(
            {
              query: {
                authors: {
                  elemMatch: {
                    uid: { eq: source.uid },
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
    },
  });
};
