import { _ as _slicedToArray } from './slicedToArray-19bf668e.js';
import './unsupportedIterableToArray-fbb818bf.js';
import { useState, useCallback, useEffect } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './toConsumableArray-261b678d.js';
import './getPrototypeOf-5905040a.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-04cb64ac.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-934b2e15.js';
import './characters.js';
import './format.js';
import { KEY_UP, KEY_DOWN } from './keycodes.js';
import './url.js';
import './web3.js';

function useArrowKeysFocus(refs) {
  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      highlightedIndex = _useState2[0],
      setHighlightedIndex = _useState2[1];

  var cycleFocus = useCallback(function (e, change) {
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
  var handleKeyDown = useCallback(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === KEY_UP || keyCode === KEY_DOWN) {
      cycleFocus(event, keyCode === KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  useEffect(function () {
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

export { useArrowKeysFocus };
//# sourceMappingURL=useArrowKeysFocus.js.map
