const path = require("path");
const { Path, FS } = require("@unisite/utils");

// Check the environment and create some files.
module.exports = (_, options) => {
  const contentPath = path.resolve(Path.root(), options.contentPath);

  if (!FS.existsDirectorySync(contentPath)) {
    FS.mkdirSync(contentPath);
  }
};
