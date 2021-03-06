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
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-086fd371.js');

function IconBlock(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M18.807 6.589L12.96 3.666l-.002-.001a2.165 2.165 0 00-1.918 0L5.195 6.589A2.141 2.141 0 004 8.516v6.955a2.141 2.141 0 001.186 1.936l5.847 2.924a2.154 2.154 0 001.927 0l5.845-2.923A2.141 2.141 0 0020 15.481V8.515a2.14 2.14 0 00-1.193-1.926zm-.19 8.892a.767.767 0 01-.429.69l-5.847 2.923a.774.774 0 01-.69 0l-5.845-2.922a.766.766 0 01-.423-.694V8.516c0-.294.164-.558.429-.69l5.845-2.923a.771.771 0 01.685 0l5.847 2.924c.264.13.428.395.428.689v6.964z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.693 7.418a.692.692 0 00-.928-.31L12 10.492 5.235 7.108a.692.692 0 00-.619 1.237l7.075 3.538a.692.692 0 00.618 0l7.075-3.538a.691.691 0 00.31-.927z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 10.573a.691.691 0 00-.691.691v8.595a.691.691 0 101.383 0v-8.595a.692.692 0 00-.692-.691z"
  }));
}

IconBlock.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconBlock;
//# sourceMappingURL=IconBlock.js.map
