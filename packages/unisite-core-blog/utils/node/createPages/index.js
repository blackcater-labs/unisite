const createPostPages = require("./createPostPages");
const createTagPages = require("./createTagPages");
const createColumnPages = require("./createColumnPages");
const createArchivePages = require("./createArchivePages");
const createUserPages = require("./createUserPages");

module.exports = async function createPages(api, options) {
  await createPostPages(api, options);
  await createTagPages(api, options);
  await createColumnPages(api, options);
  await createUserPages(api, options);
  await createArchivePages(api, options);
};
