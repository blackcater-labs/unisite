export type Tag = {
  id: string;
  tid: string;
  name: string;
  columns: Column[];
  posts: Post[];
  postCount: number;
};

export type Column = {
  id: string;
  cid: string;
  name: string;
  description: string;
  cover: any;
  tags: Tag[];
  authors: User[];
  posts: ColumnPost[];
};

export type SocialLinks = {
  // website
  website_url: string;
  // opensource
  github_url: string;
  gitee_url: string;
  // algorithm
  leetcode_url: string;
  // social
  twitter_url: string;
  facebook_url: string;
  instagram_url: string;
  reddit_url: string;
  weibo_url: string;
  zhihu_url: string;
  douban_url: string;
  // design & picture
  patreon_url: string;
  unsplash_url: string;
  dribbble_url: string;
  behance_url: string;
  pinterest_url: string;
  pixiv_url: string;
  // live stream
  youtube_url: string;
  bilibili_url: string;
  twitch_url: string;
  // game
  steam_url: string;
  epic_url: string;
  playstation_url: string;
  nintendo_url: string;
  xbox_url: string;
  blizzard_url: string;
  origin_url: string;
  uplay_url: string;
  wegame_url: string;
};

export type User = SocialLinks & {
  id: string;
  uid: string;
  name: string;
  avatar: any;
  description: string;
  email: string;
  columns: Column[];
  posts: Post[];
};

export type Writer = User & {
  groups: Group[];
};

export type Group = User & {
  members: User[];
};

export type Post = {
  id: string;
  title: string;
  cover: any;
  tags: Tag[];
  authors: User[];
  published_at: string;
  updated_at: string;
  slug: string;
  draft: boolean;
  body: string;
  rawBody: string;
  excerpt: string;
  headings: object[];
  tableOfContents: object[];
  timeToRead: number;
  wordCount: any;
};

export type BlogPost = Post & {};

export type ColumnPost = Post & {
  column: Column;
};