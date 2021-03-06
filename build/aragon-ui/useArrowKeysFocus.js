'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-ef426d0f.js');
require('./unsupportedIterableToArray-8a00e599.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./toConsumableArray-7f36359f.js');
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
var keycodes = require('./keycodes.js');
require('./url.js');
require('./web3.js');

function useArrowKeysFocus(refs) {
  var _useState = React.useState(-1),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      highlightedIndex = _useState2[0],
      setHighlightedIndex = _useState2[1];

  var cycleFocus = React.useCallback(function (e, change) {
    e.preventDefault();
    var next = highlightedIndex + change;

    if (next > refs.length - 1) {
      next = 0;
    }

    if (next < 0) {
      next = refs.length - 1;
    }

    setHighlightedIndex(next);
  }, [highlightedIndex, refs.length]);
  var handleKeyDown = React.useCallback(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === keycodes.KEY_UP || keyCode === keycodes.KEY_DOWN) {
      cycleFocus(event, keyCode === keycodes.KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  React.useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  React.useEffect(function () {
    if (highlightedIndex === -1) {
      return;
    }

    if (!refs[highlightedIndex]) {
      return;
    }

    refs[highlightedIndex].focus();
  }, [highlightedIndex, refs]);
  return {
    highlightedIndex: highlightedIndex,
    setHighlightedIndex: setHighlightedIndex
  };
}

exports.useArrowKeysFocus = useArrowKeysFocus;
//# sourceMappingURL=useArrowKeysFocus.js.map
