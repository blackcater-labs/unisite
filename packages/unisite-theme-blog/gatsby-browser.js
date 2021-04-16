require("./src/styles/global.css");
require("./src/styles/typography.css");
require("./src/styles/prism.css");

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onServiceWorkerUpdateReady
exports.onServiceWorkerUpdateReady = require("./utils/browser/onServiceWorkerUpdateReady");
exports.wrapRootElement = require("./utils/wrapRootElement").wrapRootElement;
