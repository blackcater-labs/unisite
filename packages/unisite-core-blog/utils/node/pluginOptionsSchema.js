module.exports = ({ Joi }) => {
  return Joi.object({
    contentName: Joi.string().default("@blog"),
    contentPath: Joi.string().default("content"),
    tagPrefix: Joi.string().default("/tag"),
    tagListPrefix: Joi.string().default("/tags"),
    userPrefix: Joi.string().default("/user"),
    userListPrefix: Joi.string().default("/users"),
    columnPrefix: Joi.string().default("/column"),
    columnListPrefix: Joi.string().default("/columns"),
    categoryPrefix: Joi.string().default("/category"),
    categoryListPrefix: Joi.string().default("/categories"),
    postPrefix: Joi.string().default("/post"),
    postListPrefix: Joi.string().default("/list"),
    archivesPrefix: Joi.string().default("/archive"),
    categoryConfigFileName: Joi.string().default("category"),
    userConfigFileName: Joi.string().default("user"),
    tagConfigFileName: Joi.string().default("tag"),
    columnConfigFileName: Joi.string().default("column"),
  });
};
