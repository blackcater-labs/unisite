"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

// hide-range{1-2}
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Not hidden"), /*#__PURE__*/React.createElement("li", null, "Not hidden"), /*#__PURE__*/React.createElement("li", null, "Not hidden"), "// hide-range", 1 - 3, /*#__PURE__*/React.createElement("li", null, "Hidden"), /*#__PURE__*/React.createElement("li", null, "Hidden"), /*#__PURE__*/React.createElement("li", null, "Hidden"))), document.getElementById('root') // hide-line
); // hide-next-line

console.log('Hidden');