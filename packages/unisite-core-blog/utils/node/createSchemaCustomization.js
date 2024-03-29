const kebabCase = require("lodash/kebabCase");

module.exports = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;

  createFieldExtension({
    name: "def",
    args: { value: "String!" },
    extend({ value }) {
      return {
        resolve(source, args, context, info) {
          const defaultValue = JSON.parse(value);
          const data = context.defaultFieldResolver(
            source,
            args,
            context,
            info
          );

          return data === null || data === undefined ? defaultValue : data;
        },
      };
    },
  });

  createFieldExtension({
    name: "slugify",
    extend() {
      return {
        resolve(source) {
          const date = source.published_at;

          return source.slug
            ? source.slug
            : kebabCase(date ? `${date}-${source.title}` : source.title);
        },
      };
    },
  });

  createFieldExtension({
    name: "mdxpassthrough",
    args: { field: "String!" },
    extend({ field }) {
      return {
        resolve: async (source, args, context, info) => {
          const type = info.schema.getType(`Mdx`);
          const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
          const resolver = type.getFields()[field].resolve;

          return await resolver(mdxNode, args, context, { fieldName: field });
        },
      };
    },
  });

  // https://www.jetbrains.com/help/webstorm/using-language-injections.html#inject_language
  // language=graphql
  createTypes(`
    type Category implements Node {
        id: ID!
        cid: String!
        name: String!
        # link
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]")
        postCount: Int!
    }

    type Tag implements Node {
        id: ID!
        tid: String!
        name: String!
        description: String
        # link
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]")
        postCount: Int!
    }

    type Column implements Node {
        id: ID!
        cid: String!
        title: String!
        subTitle: String
        cover: File @fileByRelativePath
        chapters: JSON
        # link
        categories: [Category!] @def(value: "[]") @link(by: "cid")
        tags: [Tag!] @def(value: "[]") @link(by: "tid")
        authors: [User!] @def(value: "[]") @link(by: "uid")
        posts: [MdxColumnPost!] @link(by: "column.cid", from: "cid")
    }

    interface User implements Node {
        id: ID!
        uid: String!
        name: String!
        avatar: File @fileByRelativePath
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
        # algorithm
        leetcode_url: String
        # social
        twitter_url: String
        facebook_url: String
        instagram_url: String
        reddit_url: String
        weibo_url: String
        zhihu_url: String
        douban_url: String
        # design & picture
        patreon_url: String
        unsplash_url: String
        dribbble_url: String
        behance_url: String
        pinterest_url: String
        pixiv_url: String
        # live stream
        youtube_url: String
        bilibili_url: String
        twitch_url: String
        # game
        steam_url: String
        epic_url: String
        playstation_url: String
        nintendo_url: String
        xbox_url: String
        blizzard_url: String
        origin_url: String
        uplay_url: String
        wegame_url: String
        # link
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]")
    }
    
    type Writer implements Node & User {
        # link
        groups: [Group!] @def(value: "[]")
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]")
        
        ## User
        id: ID!
        uid: String!
        name: String!
        avatar: File @fileByRelativePath
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
        # algorithm
        leetcode_url: String
        # social
        twitter_url: String
        facebook_url: String
        instagram_url: String
        reddit_url: String
        weibo_url: String
        zhihu_url: String
        douban_url: String
        # design & picture
        patreon_url: String
        unsplash_url: String
        dribbble_url: String
        behance_url: String
        pinterest_url: String
        pixiv_url: String
        # live stream
        youtube_url: String
        bilibili_url: String
        twitch_url: String
        # game
        steam_url: String
        epic_url: String
        playstation_url: String
        nintendo_url: String
        xbox_url: String
        blizzard_url: String
        origin_url: String
        uplay_url: String
        wegame_url: String
    }
    
    type Group implements Node & User {
        # link
        members: [User!] @def(value: "[]") @link(by: "uid")
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]")
    
        ## User
        id: ID!
        uid: String!
        name: String!
        avatar: File @fileByRelativePath
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
        # algorithm
        leetcode_url: String
        # social
        twitter_url: String
        facebook_url: String
        instagram_url: String
        reddit_url: String
        weibo_url: String
        zhihu_url: String
        douban_url: String
        # design & picture
        patreon_url: String
        unsplash_url: String
        dribbble_url: String
        behance_url: String
        pinterest_url: String
        pixiv_url: String
        # live stream
        youtube_url: String
        bilibili_url: String
        twitch_url: String
        # game
        steam_url: String
        epic_url: String
        playstation_url: String
        nintendo_url: String
        xbox_url: String
        blizzard_url: String
        origin_url: String
        uplay_url: String
        wegame_url: String
    }
    
    interface Content implements Node {
        id: ID!
        type: String!
        # mdx
        body: String! @mdxpassthrough(field: "body")
        rawBody: String @mdxpassthrough(field: "rawBody")
    }

    interface ColumnContent {
        column: Column! @link(by: "cid")
    }
    
    type MdxColumnContent implements Node & Content & ColumnContent {
        id: ID!
        type: String!
        # mdx
        body: String! @mdxpassthrough(field: "body")
        rawBody: String @mdxpassthrough(field: "rawBody")

        # ColumnContent
        column: Column! @link(by: "cid")
    }

    interface Post implements Node {
        id: ID!
        title: String!
        cover: File @fileByRelativePath
        published_at(format: String, distance: JSON): Date @dateformat
        updated_at(format: String, distance: JSON): Date @dateformat
        date_at(format: String, distance: JSON): Date @dateformat
        slug: String! @slugify
        draft: Boolean! @def(value: "false")
        # mdx
        body: String! @mdxpassthrough(field: "body")
        rawBody: String @mdxpassthrough(field: "rawBody")
        excerpt(pruneLength: Int = 140, truncate: Boolean = false): String! @mdxpassthrough(field: "excerpt")
        headings(depth: HeadingsMdx): [MdxHeadingMdx!] @mdxpassthrough(field: "headings")
        tableOfContents(maxDepth: Int): JSON! @mdxpassthrough(field: "tableOfContents")
        timeToRead: Int! @mdxpassthrough(field: "timeToRead")
        wordCount: MdxWordCount! @mdxpassthrough(field: "wordCount")
        # link
        categories: [Category!] @def(value: "[]") @link(by: "cid")
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")
    }

    type MdxBlogPost implements Node & Post {
        ## Post
        title: String!
        cover: File @fileByRelativePath
        published_at(format: String, distance: JSON): Date @dateformat
        updated_at(format: String, distance: JSON): Date @dateformat
        date_at(format: String, distance: JSON): Date @dateformat
        slug: String! @slugify
        draft: Boolean! @def(value: "false")
        # mdx
        body: String! @mdxpassthrough(field: "body")
        rawBody: String @mdxpassthrough(field: "rawBody")
        excerpt(pruneLength: Int = 140, truncate: Boolean = false): String! @mdxpassthrough(field: "excerpt")
        headings(depth: HeadingsMdx): [MdxHeadingMdx!] @mdxpassthrough(field: "headings")
        tableOfContents(maxDepth: Int): JSON! @mdxpassthrough(field: "tableOfContents")
        timeToRead: Int! @mdxpassthrough(field: "timeToRead")
        wordCount: MdxWordCount! @mdxpassthrough(field: "wordCount")
        # link
        categories: [Category!] @def(value: "[]") @link(by: "cid")
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")
    }

    interface ColumnPost {
        order: Int!
        column: Column! @link(by: "cid")
    }
    
    type MdxColumnPost implements Node & Post & ColumnPost {
        ## Post
        title: String!
        cover: File @fileByRelativePath
        published_at(format: String, distance: JSON): Date @dateformat
        updated_at(format: String, distance: JSON): Date @dateformat
        date_at(format: String, distance: JSON): Date @dateformat
        slug: String! @slugify
        draft: Boolean! @def(value: "false")
        # mdx
        body: String! @mdxpassthrough(field: "body")
        rawBody: String @mdxpassthrough(field: "rawBody")
        excerpt(pruneLength: Int = 140, truncate: Boolean = false): String! @mdxpassthrough(field: "excerpt")
        headings(depth: HeadingsMdx): [MdxHeadingMdx!] @mdxpassthrough(field: "headings")
        tableOfContents(maxDepth: Int): JSON! @mdxpassthrough(field: "tableOfContents")
        timeToRead: Int! @mdxpassthrough(field: "timeToRead")
        wordCount: MdxWordCount! @mdxpassthrough(field: "wordCount")
        # link
        categories: [Category!] @def(value: "[]") @link(by: "cid")
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")

        ## ColumnPost
        order: Int!
        column: Column! @link(by: "cid")
    }

    type UnisiteCoreBlogConfig implements Node {
        tagPrefix: String!
        tagListPrefix: String!
        userPrefix: String!
        userListPrefix: String!
        columnPrefix: String!
        columnListPrefix: String!
        categoryPrefix: String!
        categoryListPrefix: String!
        postPrefix: String!
        postListPrefix: String!
        archivesPrefix: String!
    }
  `);
};
