"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

// highlight-line
class Counter extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      count: 0
    };

    this.updateCount = () => {
      this.setState(state => ({
        // highlight-next-line
        count: state.count + 1
      }));
    };
  }

  // highlight-range{1-2}
  render() {
    const {
      count
    } = this.state;
    return (
      /*#__PURE__*/
      // highlight-line
      _react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "clicked ", count), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.updateCount
      }, "Click me"))
    );
  }

}

exports.default = Counter;