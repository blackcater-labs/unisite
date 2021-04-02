module.exports = ({ Joi }) => {
  return Joi.object({
    contentName: Joi.string().default("@blog"),
    contentPath: Joi.string().default("content"),
    categoryConfigFileName: Joi.string().default("category"),
    userConfigFileName: Joi.string().default("user"),
    tagConfigFileName: Joi.string().default("tag"),
    columnConfigFileName: Joi.string().default("column"),
  });
};
