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

  // https://www.jetbrains.com/help/webstorm/using-language-injections.html#inject_language
  // language=graphql
  createTypes(`
    type Tag implements Node @nodeInterface {
        id: ID!
        tid: String!
        name: String!
        # link
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]") @link(by: "tags.tid", from: "tid")
    }
    
    type Column implements Node @nodeInterface {
        id: ID!
        cid: String!
        name: String!
        description: String
        cover: File @fileByRelativePath
        # link
        tags: [Tag!] @def(value: "[]") @link(by: "tid")
        authors: [User!] @def(value: "[]") @link(by: "uid")
        posts: [MdxColumnPost!] @def(value: "[]") @link(by: "column.cid", from: "cid")
    }
    
    interface User @nodeInterface {
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
        posts: [Post!] @def(value: "[]") @link(by: "authors.uid", from: "uid")
    }
    
    type Writer implements Node & User {
        # link
        groups: [Group!] @def(value: "[]")
        columns: [Column!] @def(value: "[]")
        posts: [Post!] @def(value: "[]") @link(by: "authors.uid", from: "uid")
        
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
        posts: [Post!] @def(value: "[]") @link(by: "authors.uid", from: "uid")
    
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

    interface Post @nodeInterface {
        id: ID!
        title: String!
        excerpt: String
        draft: Boolean! @def(value: "false")
        banner: File @fileByRelativePath
        published_at: Date @dateformat
        updated_at: Date @dateformat
        # link
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")
    }

    interface BlogPost {
        _EMPTY_: String
    }

    interface ColumnPost {
        column: Column! @link(by: "cid")
    }
    
    type MdxBlogPost implements Node & Post & BlogPost {
        ## Post
        title: String!
        excerpt: String
        draft: Boolean! @def(value: "false")
        banner: File @fileByRelativePath
        published_at: Date @dateformat
        updated_at: Date @dateformat
        # link
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")

        ## BlogPost
        _EMPTY_: String
    }
    
    type MdxColumnPost implements Node & Post & ColumnPost {
        ## Post
        title: String!
        excerpt: String
        draft: Boolean! @def(value: "false")
        banner: File @fileByRelativePath
        published_at: Date @dateformat
        updated_at: Date @dateformat
        # link
        tags: [Tag!]! @def(value: "[]") @link(by: "tid")
        authors: [User!]! @def(value: "[]") @link(by: "uid")

        ## ColumnPost
        column: Column! @link(by: "cid")
    }
  `);
};
