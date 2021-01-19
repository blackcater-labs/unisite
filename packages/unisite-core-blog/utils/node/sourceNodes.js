const path = require("path");
const Joi = require("joi");
const chalk = require("chalk");
const { Config, Path } = require("@unisite/utils");

// create user nodes
function createUserNodes({
  contentPath,
  createNode,
  createNodeId,
  createContentDigest,
  reporter,
}) {
  const module = path.relative(Path.root(), path.resolve(contentPath, "user"));
  const users = Config.get(module);
  const schema = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        avatar: Joi.string(),
        description: Joi.string(),
        email: Joi.string(),
        members: Joi.array().items(Joi.string().required()),
        website_url: Joi.string(),
        github_url: Joi.string(),
        gitee_url: Joi.string(),
        leetcode_url: Joi.string(),
        twitter_url: Joi.string(),
        facebook_url: Joi.string(),
        instagram_url: Joi.string(),
        reddit_url: Joi.string(),
        weibo_url: Joi.string(),
        zhihu_url: Joi.string(),
        douban_url: Joi.string(),
        patreon_url: Joi.string(),
        unsplash_url: Joi.string(),
        dribbble_url: Joi.string(),
        behance_url: Joi.string(),
        pinterest_url: Joi.string(),
        pixiv_url: Joi.string(),
        youtube_url: Joi.string(),
        bilibili_url: Joi.string(),
        twitch_url: Joi.string(),
        steam_url: Joi.string(),
        epic_url: Joi.string(),
        playstation_url: Joi.string(),
        nintendo_url: Joi.string(),
        xbox_url: Joi.string(),
        blizzard_url: Joi.string(),
        origin_url: Joi.string(),
        uplay_url: Joi.string(),
        wegame_url: Joi.string(),
      })
    )
    .unique((a, b) => a.id === b.id);
  const { value: list, error } = schema.validate(users);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of user is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const item of list) {
    const { id, ...rest } = item;
    const data = {
      ...rest,
      uid: id,
    };
    const isGroup = !!data.members;
    const type = isGroup ? "Group" : "Writer";

    createNode({
      ...data,
      id: createNodeId(`${data.uid} >>> ${type}`),
      parent: null,
      children: [],
      internal: {
        type,
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: `${type} implementation of the Node interface`,
      },
    });
  }
}

// create tag nodes
function createTagNodes({
  contentPath,
  createNode,
  createNodeId,
  createContentDigest,
  reporter,
}) {
  const module = path.relative(Path.root(), path.resolve(contentPath, "tag"));
  const tags = Config.get(module);
  const schema = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
      })
    )
    .unique((a, b) => a.id === b.id);
  const { value: list, error } = schema.validate(tags);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of tag is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const item of list) {
    const { id, ...rest } = item;
    const data = {
      ...rest,
      tid: item.id,
    };

    createNode({
      ...data,
      id: createNodeId(`${data.tid} >>> Tag`),
      parent: null,
      children: [],
      internal: {
        type: "Tag",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Tag implementation of the Node interface",
      },
    });
  }
}

// create column nodes
function createColumnNodes({
  contentPath,
  createNode,
  createNodeId,
  createContentDigest,
  reporter,
}) {
  const module = path.relative(
    Path.root(),
    path.resolve(contentPath, "column")
  );
  const tags = Config.get(module);
  const schema = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        cover: Joi.string(),
        tags: Joi.array().items(Joi.string().required()),
        authors: Joi.array().items(Joi.string().required()),
      })
    )
    .unique((a, b) => a.id === b.id);
  const { value: list, error } = schema.validate(tags);

  if (error) {
    reporter.panic(
      chalk.red.bold("Configuration of column is invalid") +
        `\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const item of list) {
    const { id, ...rest } = item;
    const data = {
      ...rest,
      cid: item.id,
    };

    createNode({
      ...data,
      id: createNodeId(`${data.cid} >>> Column`),
      parent: null,
      children: [],
      internal: {
        type: "Column",
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: "Column implementation of the Node interface",
      },
    });
  }
}

module.exports = (
  { actions, createContentDigest, createNodeId, reporter },
  options
) => {
  const { createNode } = actions;
  const contentPath = path.resolve(Path.root(), options.contentPath);

  createUserNodes({
    contentPath,
    createNode,
    createNodeId,
    createContentDigest,
    reporter,
  });

  createTagNodes({
    contentPath,
    createNode,
    createNodeId,
    createContentDigest,
    reporter,
  });

  createColumnNodes({
    contentPath,
    createNode,
    createNodeId,
    createContentDigest,
    reporter,
  });
};
