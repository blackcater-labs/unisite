const React = require("react");

module.exports = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:300,400,500,700,900|Noto+Serif+SC:300,400,500,700,900|JetBrains+Mono:400,700"
    />,
    <script dangerouslySetInnerHTML={{ __html: 'console.log("haha")' }} />,
  ]);
};
