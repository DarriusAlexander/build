'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-ef426d0f.js');
require('./unsupportedIterableToArray-8a00e599.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-7f36359f.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-e2d1e599.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-aa59a48e.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-ecfd5d91.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./isObject-52908731.js');
require('./Viewport-fe2db97a.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var LoadingRing = require('./LoadingRing.js');
require('./ToastHub.js');
require('./index-5aaa52c3.js');
require('./RootPortal.js');
var FloatIndicator = require('./FloatIndicator.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

function SyncIndicator(_ref) {
  var children = _ref.children,
      label = _ref.label,
      shift = _ref.shift,
      visible = _ref.visible,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "label", "shift", "visible"]);

  return /*#__PURE__*/React__default.createElement(FloatIndicator.default, _extends$1._extends({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React__default.createElement(LoadingRing.default, null), /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css: 1.5 * constants.GU
  }, children || /*#__PURE__*/React__default.createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: index.PropTypes.node,
  label: index.PropTypes.node,
  shift: index.PropTypes.number,
  visible: index.PropTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

exports.default = SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
