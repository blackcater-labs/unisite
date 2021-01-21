const path = require("path");
const { Path, FS } = require("@unisite/utils");
const defaultOptions = require("../config/defaultOptions");

// Check the environment and create some files.
module.exports = (_, options) => {
  options = defaultOptions(options);

  const contentPath = path.resolve(Path.root(), options.contentPath);

  if (!FS.existsDirectorySync(contentPath)) {
    FS.mkdirSync(contentPath);
  }
};
