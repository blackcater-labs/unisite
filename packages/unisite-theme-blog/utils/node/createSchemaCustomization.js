module.exports = ({ actions }) => {
  const { createTypes } = actions;

  // https://www.jetbrains.com/help/webstorm/using-language-injections.html#inject_language
  // language=graphql
  createTypes(`
    type UTBCHeader {
      bar: JSON
      nav: JSON
    }
  
    type UnisiteThemeBlogConfig implements Node {
      header: UTBCHeader
    }
  `);
};
