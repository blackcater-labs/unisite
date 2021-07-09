const Joi = require("joi");
const chalk = require("chalk");

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

module.exports = async function createUserNodes(
  rawUsers,
  { actions, node, getNode, createContentDigest, createNodeId, reporter },
  options
) {
  const { createNode, createParentChildLink } = actions;
  const { value: users, error } = schema.validate(rawUsers);

  if (error) {
    reporter.panic(
      `${chalk.red.bold("Configuration of user is invalid") 
        }\n    ${error.name} ${error.message}`
    );
    return;
  }

  for (const user of users) {
    const { id, ...rest } = user;
    const data = {
      ...rest,
      uid: id,
    };
    const isGroup = !!data.members;
    const type = isGroup ? "Group" : "Writer";
    const nodeId = createNodeId(`${data.uid} >>> ${type}`);

    createNode({
      ...data,
      id: nodeId,
      parent: node.id,
      children: [],
      internal: {
        type,
        contentDigest: createContentDigest(data),
        content: JSON.stringify(data),
        description: `${type} implementation of the Node interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(nodeId) });
  }
};
