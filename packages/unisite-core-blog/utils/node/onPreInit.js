const { Path } = require("@unisite/utils");

// Check the environment and create some files.
module.exports = () => {
  console.log("onPreInit options:", Path.getRoot());
};
