"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

// hide-range{2-3,7}
// highlight-range{5-7,9}
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "hidden"))), // highlight-next-line
document.getElementById('root'));