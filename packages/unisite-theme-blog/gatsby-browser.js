require("./src/styles/global.css");

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onServiceWorkerUpdateReady
exports.onServiceWorkerUpdateReady = require("./utils/browser/onServiceWorkerUpdateReady");
