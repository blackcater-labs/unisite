const React = require("react");

module.exports = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="link-google-noto-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=JetBrains+Mono:400,500"
    />,
  ]);
};
