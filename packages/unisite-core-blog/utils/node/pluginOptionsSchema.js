module.exports = ({ Joi }) => {
  return Joi.object({
    contentName: Joi.string().default("@blog"),
    contentPath: Joi.string().default("content"),
  });
};
