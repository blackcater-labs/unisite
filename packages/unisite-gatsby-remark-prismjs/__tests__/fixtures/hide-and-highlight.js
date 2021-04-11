"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

// hide-range{2-3,10-12,18}
// highlight-range{6-8}
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Not hidden and highlighted"), /*#__PURE__*/React.createElement("li", null, "Not hidden and highlighted"), /*#__PURE__*/React.createElement("li", null, "Not hidden and highlighted"), /*#__PURE__*/React.createElement("li", null, "Hidden"), /*#__PURE__*/React.createElement("li", null, "Hidden"), /*#__PURE__*/React.createElement("li", null, "Hidden"))), // highlight-next-line
document.getElementById('root'));
console.log('Hidden');