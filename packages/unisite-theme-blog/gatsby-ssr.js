// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody
exports.onRenderBody = require("./utils/ssr/onRenderBody");
exports.wrapRootElement = require("./utils/wrapRootElement").wrapRootElement;
