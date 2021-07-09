const path = require("path");
const { Path, FS, Env } = require("@unisite/utils");
const defaultOptions = require("../config/defaultOptions");

// Check the environment and create some files.
module.exports = (_, options) => {
  options = defaultOptions(options);

  const contentPath = path.resolve(Path.rootPath, options.contentPath);

  if (!FS.existsDirectorySync(contentPath)) {
    FS.mkdirSync(contentPath);
  }

  const {configPath} = Path;

  if (!configPath) {
    FS.createFileSync(
      path.resolve(Path.rootPath, `${Env.UNISITE_CONFIG_NAME}.yaml`)
    );
  }
};
