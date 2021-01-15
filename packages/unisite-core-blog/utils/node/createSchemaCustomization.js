module.exports = ({ actions }) => {
  const { createTypes } = actions;

  // https://www.jetbrains.com/help/webstorm/using-language-injections.html#inject_language
  createTypes(`
    type Tag implements Node @nodeInterface {
        id: ID!
        tid: String!
        name: String!
        # link
        columns: [Column!]! @link(by: "tags.tid", from: "tid")
        posts: [Post!]! @link(by: "tags.tid", from: "tid")
    }
    
    type Column implements Node @nodeInterface {
        id: ID!
        cid: String!
        name: String!
        description: String
        cover: File!
        # link
        tags: [Tag!]! @link(by: "tid")
        authors: [User!]! @link(by: "uid")
        posts: [MdxColumnPost!]! @link(by: "column.cid", from: "cid")
    }
    
    interface User @nodeInterface {
        id: ID!
        uid: String!
        name: String!
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
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
        columns: [Column!]! @link(by: "authors.uid", from: "uid")
        posts: [Post!]! @link(by: "authors.uid", from: "uid")
    }
    
    type Writer implements Node & User {
        # link
        groups: [Group!]! @link(by: "uid")
        posts: [Post!]! @link(by: "authors.uid", from: "uid")
        columns: [Column!]! @link(by: "authors.uid", from: "uid")
        
        ## User
        id: ID!
        uid: String!
        name: String!
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
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
        members: [User!]! @link(by: "uid", from: "uid")
        columns: [Column!]! @link(by: "authors.uid", from: "uid")
        posts: [Post!]! @link(by: "authors.uid", from: "uid")
    
        ## User
        id: ID!
        uid: String!
        name: String!
        description: String
        email: String
        # website
        website_url: String
        # opensource
        github_url: String
        gitee_url: String
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
        published_at: Date! @dateformat
        updated_at: Date! @dateformat
        # link
        tags: [Tag!]! @link(by: "tid")
        authors: [User!]! @link(by: "uid")
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
        published_at: Date! @dateformat
        updated_at: Date! @dateformat
        # link
        tags: [Tag!]! @link(by: "tid")
        authors: [User!]! @link(by: "uid")

        ## BlogPost
        _EMPTY_: String
    }
    
    type MdxColumnPost implements Node & Post & ColumnPost {
        ## Post
        title: String!
        excerpt: String
        published_at: Date! @dateformat
        updated_at: Date! @dateformat
        # link
        tags: [Tag!]! @link(by: "tid")
        authors: [User!]! @link(by: "uid")

        ## ColumnPost
        column: Column! @link(by: "cid")
    }
  `);
};
