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
require('./constants.js');
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
require('./Layout.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./getDisplayName-7ab6d318.js');
require('./index-2b9f03ad.js');
require('./ToastHub.js');
require('./index-5aaa52c3.js');
require('./RootPortal.js');
require('./taggedTemplateLiteral-227ed122.js');
require('./BaseStyles.js');
require('./ScrollView.js');
var Main = require('./Main.js');
require('./Text.js');
var AppBar = require('./AppBar.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sm6g80-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], function (p) {
  return p.height;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sm6g80-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sm6g80-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sm6g80-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], function (_ref) {
  var padding = _ref.padding;
  return "".concat(padding, "px");
});

function AppView(_ref2) {
  var appBar = _ref2.appBar,
      children = _ref2.children,
      height = _ref2.height,
      padding = _ref2.padding,
      tabs = _ref2.tabs,
      title = _ref2.title,
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["appBar", "children", "height", "padding", "tabs", "title"]);

  // Notify Main that it contains this AppView
  Main.useRegisterAppView();
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({
    height: height
  }, props), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, appBar || /*#__PURE__*/React__default.createElement(AppBar.default, {
    title: title,
    tabs: tabs
  })), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(_StyledDiv4, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: index.PropTypes.element,
  title: index.PropTypes.string,
  children: index.PropTypes.node,
  padding: index.PropTypes.number,
  height: index.PropTypes.string,
  tabs: index.PropTypes.element
};

exports.default = AppView;
//# sourceMappingURL=AppView.js.map
