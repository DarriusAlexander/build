'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-ef426d0f.js');
require('./unsupportedIterableToArray-8a00e599.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-7f36359f.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-e2d1e599.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
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
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var ContextMenuItem = /*#__PURE__*/React__default.memo(function ContextMenuItem(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends$1._extends({}, props, {
    _css: textStyles.textStyle('body2'),
    _css2: css.unselectable(),
    _css3: theme.surfacePressed
  }));
});

exports.default = ContextMenuItem;
//# sourceMappingURL=ContextMenuItem.js.map
