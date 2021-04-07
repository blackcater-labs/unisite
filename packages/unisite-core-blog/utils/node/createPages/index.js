const defaultOptions = require("../../config/defaultOptions");
const createPostPages = require("./createPostPages");
const createCategoryPages = require("./createCategoryPages");
const createTagPages = require("./createTagPages");
const createColumnPages = require("./createColumnPages");
const createArchivePages = require("./createArchivePages");
const createUserPages = require("./createUserPages");

module.exports = async function createPages(api, options) {
  options = defaultOptions(options);

  await createPostPages(api, options);
  await createCategoryPages(api, options);
  await createTagPages(api, options);
  await createColumnPages(api, options);
  await createUserPages(api, options);
  await createArchivePages(api, options);
};
