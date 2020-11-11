function _interopDefault$1(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');

var React__default = _interopDefault$1(React);

var classNames = _interopDefault$1(require('classnames/bind'));

var formik = require('formik');

var _isEmpty = _interopDefault$1(require('lodash.isempty'));

require('store');

require('compare-versions');

require('react-device-detect');

var reactFontawesome = require('@fortawesome/react-fontawesome');

var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');

var FacebookLogin = _interopDefault$1(require('react-facebook-login/dist/facebook-login-render-props'));

var GoogleLogin = _interopDefault$1(require('react-google-login'));

var LazyLoad = _interopDefault$1(require('react-lazyload'));

var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var styles = {
  "test": "_3ybTi"
};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};

var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};

var isElement = function isElement(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};

var isFragment = function isFragment(a) {
  return z(a) === e;
};

var isLazy = function isLazy(a) {
  return z(a) === t;
};

var isMemo = function isMemo(a) {
  return z(a) === r;
};

var isPortal = function isPortal(a) {
  return z(a) === d;
};

var isProfiler = function isProfiler(a) {
  return z(a) === g;
};

var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};

var isSuspense = function isSuspense(a) {
  return z(a) === p;
};

var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};
var reactIs_development = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      }

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    var test1 = new String('abc');
    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    }

    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      throw new Error(message);
    } catch (x) {}
  };
}

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;

        try {
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning$1() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function printWarning$1(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }

  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }

    if (!propValue) {
      return false;
    }

    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  }

  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  }

  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs;
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    module.exports = factoryWithThrowingShims();
  }
});

var isValidEmail = function isValidEmail(email) {
  return email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

var isValidPwd = function isValidPwd(password) {
  return password && password.length >= 6;
};

function signUpValidate(values) {
  var errors = {};
  var username = values.username,
      email = values.email,
      password = values.password;

  if (_isEmpty(username)) {
    errors.username = '必填欄位';
  }

  if (_isEmpty(password)) {
    errors.password = '必填欄位';
  } else if (!isValidPwd(password)) {
    errors.password = '密碼至少為 6 位英數字';
  }

  if (_isEmpty(email)) {
    errors.email = '必填欄位';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email 格式錯誤';
  }

  return errors;
}

function signInValidate(values) {
  var errors = {};
  var email = values.email,
      password = values.password;

  if (_isEmpty(password)) {
    errors.password = '必填欄位';
  } else if (!isValidPwd(password)) {
    errors.password = '密碼至少為 6 位英數字';
  }

  if (_isEmpty(email)) {
    errors.email = '必填欄位';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email 格式錯誤';
  }

  return errors;
}

function isIosWebview() {
  if (typeof window !== 'object') return false;
  var agent = window.navigator.userAgent.toLowerCase();
  var safari = /safari/.test(agent);
  var ios = /iphone|ipod|ipad/.test(agent);
  if (!ios) return false;
  return !safari;
}

function isAndroidWebview() {
  if (typeof window !== 'object') return false;
  var agent = window.navigator.userAgent.toLowerCase();
  var isChrome = /Chrome\/[\d.]+\sMobile/i.test(agent);
  var isWebview = /; wv\)/.test(agent);
  return isChrome && isWebview;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ImgContent(_ref) {
  var imgUrl = _ref.imgUrl,
      alt = _ref.alt;
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("source", {
    srcSet: "" + imgUrl.replace(/\.(png|jpg|jpeg)$/, '.webp'),
    type: "image/webp"
  }), /*#__PURE__*/React__default.createElement("source", {
    srcSet: "" + imgUrl,
    type: "image/png"
  }), /*#__PURE__*/React__default.createElement("img", {
    src: imgUrl,
    alt: alt,
    style: {
      width: '100%'
    }
  }));
}

ImgContent.propTypes = {
  imgUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};
ImgContent.defaultProps = {};
var WebpImgWithPassRef = React.forwardRef(function (props, ref) {
  var imgUrl = props.imgUrl,
      alt = props.alt,
      href = props.href,
      onClick = props.onClick,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return /*#__PURE__*/React__default.createElement("picture", {
    ref: ref,
    href: href,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React__default.createElement(ImgContent, {
    imgUrl: imgUrl,
    alt: alt
  }));
});
WebpImgWithPassRef.displayName = 'WebpImgWithPassRef';

function WebpImg(_ref2) {
  var imgUrl = _ref2.imgUrl,
      alt = _ref2.alt,
      style = _ref2.style,
      lazyLoad = _ref2.lazyLoad,
      height = _ref2.height,
      offset = _ref2.offset,
      className = _ref2.className;

  if (lazyLoad) {
    return /*#__PURE__*/React__default.createElement(LazyLoad, {
      height: height,
      offset: offset
    }, /*#__PURE__*/React__default.createElement("picture", {
      style: _extends({
        maxWidth: '100%',
        height: 'auto'
      }, style),
      className: className
    }, /*#__PURE__*/React__default.createElement(ImgContent, {
      imgUrl: imgUrl,
      alt: alt
    })));
  }

  return /*#__PURE__*/React__default.createElement("picture", {
    style: _extends({
      maxWidth: '100%',
      height: 'auto'
    }, style),
    className: className
  }, /*#__PURE__*/React__default.createElement(ImgContent, {
    imgUrl: imgUrl,
    alt: alt
  }));
}

WebpImg.propTypes = {
  imgUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  style: propTypes.object,
  lazyLoad: propTypes.bool,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  offset: propTypes.oneOfType([propTypes.string, propTypes.number])
};
WebpImg.defaultProps = {
  style: {},
  lazyLoad: true,
  height: 0,
  offset: 150
};
var styles$1 = {
  "container--auth-form": "_1eDNJ",
  "container--main": "_1K1OJ",
  "title": "_22Wz8",
  "container--action": "_3fHmq",
  "content": "_3lfGK",
  "container--prompt": "_2pjUG",
  "hint": "_2s2qa",
  "container--icon": "_2dR0N",
  "back": "_y2iTv",
  "field": "_VbZ1j",
  "btn--sign-in": "_2fE2n",
  "field__err-msg": "_3o0GC"
};
var cx = classNames.bind(styles$1);

function SignInForm(_ref) {
  var toggleAuthLayout = _ref.toggleAuthLayout,
      back = _ref.back,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting;
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faArrowLeft,
    className: cx('back'),
    onClick: back
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx('container--auth-form')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx('container--main')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx('field')
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: "\u5E33\u865F- Email",
    className: cx('text-input'),
    onChange: handleChange,
    name: "email",
    type: "email"
  })), /*#__PURE__*/React__default.createElement(formik.ErrorMessage, {
    name: "email",
    component: "div",
    className: cx('field__err-msg')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx('field')
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: "\u5BC6\u78BC",
    className: cx('text-input'),
    onChange: handleChange,
    name: "password",
    type: "password"
  })), /*#__PURE__*/React__default.createElement(formik.ErrorMessage, {
    name: "password",
    component: "div",
    className: cx('field__err-msg')
  }), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    formFor: "auth-form",
    className: cx('btn--sign-in'),
    onClick: handleSubmit,
    disabled: isSubmitting
  }, "\u767B\u5165"), /*#__PURE__*/React__default.createElement("div", {
    className: cx('container--prompt')
  }, "\u9084\u6C92\u6709\u5E33\u865F\uFF1F", ' ', /*#__PURE__*/React__default.createElement("span", {
    className: cx('hint'),
    onClick: toggleAuthLayout,
    role: "button",
    tabIndex: "0"
  }, "\u8A3B\u518A")))));
}

SignInForm.propTypes = {
  onFinish: propTypes.func.isRequired,
  onRequest: propTypes.func.isRequired,
  onSuccess: propTypes.func,
  onFail: propTypes.func
};
SignInForm.defaultProps = {
  onSuccess: null,
  onFail: null
};
var cx$1 = classNames.bind(styles$1);

function SignInForm$1(_ref) {
  var toggleAuthLayout = _ref.toggleAuthLayout,
      next = _ref.next,
      back = _ref.back,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      step = _ref.step,
      handleFBError = _ref.handleFBError,
      responseFacebook = _ref.responseFacebook,
      handleGoogleError = _ref.handleGoogleError,
      responseGoogle = _ref.responseGoogle,
      checkShouldShowGoogleLogin = _ref.checkShouldShowGoogleLogin,
      redirectUri = _ref.redirectUri,
      facebookAppId = _ref.facebookAppId,
      googleClientId = _ref.googleClientId;

  if (step === 2) {
    return /*#__PURE__*/React__default.createElement(SignInForm, {
      step: step,
      next: next,
      back: back,
      toggleAuthLayout: toggleAuthLayout,
      handleChange: handleChange,
      handleSubmit: handleSubmit,
      isSubmitting: isSubmitting
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx$1('container--auth-form')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$1('container--main')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$1('title')
  }, "\u767B\u5165"), /*#__PURE__*/React__default.createElement(FacebookLogin, {
    appId: facebookAppId,
    fields: "name,email",
    scope: "public_profile,email",
    callback: responseFacebook,
    responseType: "token",
    redirectUri: redirectUri,
    onFailure: handleFBError,
    render: function render(renderProps) {
      return /*#__PURE__*/React__default.createElement("button", {
        className: cx$1('container--action'),
        onClick: renderProps.onClick,
        type: "button"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$1('content')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$1('container--icon')
      }, /*#__PURE__*/React__default.createElement(WebpImg, {
        imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/facebook.png",
        alt: "facebook",
        lazyLoad: false
      })), "Facebook \u767B\u5165"));
    }
  }), checkShouldShowGoogleLogin() && /*#__PURE__*/React__default.createElement(GoogleLogin, {
    clientId: googleClientId,
    buttonText: "Google \u767B\u5165",
    onSuccess: responseGoogle,
    onFailure: handleGoogleError,
    cookiePolicy: "single_host_origin",
    className: cx$1('btn-google-login'),
    render: function render(renderProps) {
      return /*#__PURE__*/React__default.createElement("button", {
        className: cx$1('container--action'),
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        type: "button"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$1('content')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$1('container--icon')
      }, /*#__PURE__*/React__default.createElement(WebpImg, {
        imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/google.png",
        alt: "google",
        lazyLoad: false
      })), "Google \u767B\u5165"));
    }
  }), /*#__PURE__*/React__default.createElement("button", {
    className: cx$1('container--action'),
    onClick: next,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$1('content')
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeRegularSvgIcons.faEnvelope,
    className: cx$1('container--icon')
  }), "Email \u767B\u5165")), /*#__PURE__*/React__default.createElement("div", {
    className: cx$1('container--prompt')
  }, "\u9084\u6C92\u6709\u5E33\u865F\uFF1F", ' ', /*#__PURE__*/React__default.createElement("span", {
    className: cx$1('hint'),
    onClick: toggleAuthLayout,
    role: "button",
    tabIndex: "0"
  }, "\u8A3B\u518A"))));
}

SignInForm$1.propTypes = {
  onFinish: propTypes.func.isRequired,
  onRequest: propTypes.func.isRequired,
  onSuccess: propTypes.func,
  onFail: propTypes.func
};
SignInForm$1.defaultProps = {
  onSuccess: null,
  onFail: null
};
var styles$2 = {
  "container--auth-form": "_3bnDi",
  "container--main": "_1x1SX",
  "title": "_30o6d",
  "step2": "_2NkvD",
  "container--image": "_1Valu",
  "dialog": "_X6csw",
  "cuties": "_3ZrZi",
  "container--action": "_2ciUQ",
  "content": "_RgDIt",
  "container--prompt": "_37bQG",
  "hint": "_3D7XI",
  "container--icon": "_E9aQI",
  "back": "_1SAMl",
  "field": "_H30xp",
  "btn--sign-in": "_2GCdw",
  "field__err-msg": "_XuSPc"
};
var cx$2 = classNames.bind(styles$2);

function SignUpForm(_ref) {
  var toggleAuthLayout = _ref.toggleAuthLayout,
      back = _ref.back,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      termsOfServiceUrl = _ref.termsOfServiceUrl;
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faArrowLeft,
    className: cx$2('back'),
    onClick: back
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('container--auth-form')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('container--main')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('title', 'step2')
  }, "Email \u8A3B\u518A"), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('field')
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: "\u7528\u6236\u540D",
    className: cx$2('text-input'),
    onChange: handleChange,
    name: "username",
    type: "text"
  })), /*#__PURE__*/React__default.createElement(formik.ErrorMessage, {
    name: "username",
    component: "div",
    className: cx$2('field__err-msg')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('field')
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: "\u5E33\u865F Email",
    className: cx$2('text-input'),
    onChange: handleChange,
    name: "email",
    type: "email"
  })), /*#__PURE__*/React__default.createElement(formik.ErrorMessage, {
    name: "email",
    component: "div",
    className: cx$2('field__err-msg')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('field')
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: "\u5BC6\u78BC",
    className: cx$2('text-input'),
    onChange: handleChange,
    name: "password",
    type: "password"
  })), /*#__PURE__*/React__default.createElement(formik.ErrorMessage, {
    name: "password",
    component: "div",
    className: cx$2('field__err-msg')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('container--prompt')
  }, "\u8A3B\u518A\u5373\u8868\u793A\u60A8\u5DF2\u95B1\u8B80\u4E26\u540C\u610F", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("a", {
    target: "_blank",
    className: cx$2('hint'),
    href: termsOfServiceUrl
  }, "\u4F7F\u7528\u8005\u689D\u6B3E")), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    formFor: "auth-form",
    className: cx$2('btn--sign-in'),
    onClick: handleSubmit,
    disabled: isSubmitting
  }, "\u9001\u51FA"), /*#__PURE__*/React__default.createElement("div", {
    className: cx$2('container--prompt')
  }, "\u5DF2\u7D93\u6709\u5E33\u865F\u4E86\uFF1F", ' ', /*#__PURE__*/React__default.createElement("span", {
    className: cx$2('hint'),
    onClick: toggleAuthLayout,
    role: "button",
    tabIndex: "0"
  }, "\u767B\u5165")))));
}

SignUpForm.propTypes = {
  onFinish: propTypes.func.isRequired,
  onRequest: propTypes.func.isRequired,
  onSuccess: propTypes.func,
  onFail: propTypes.func
};
SignUpForm.defaultProps = {
  onSuccess: null,
  onFail: null
};
var cx$3 = classNames.bind(styles$2);

function SignUpForm$1(_ref) {
  var toggleAuthLayout = _ref.toggleAuthLayout,
      next = _ref.next,
      back = _ref.back,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      step = _ref.step,
      handleFBError = _ref.handleFBError,
      responseFacebook = _ref.responseFacebook,
      handleGoogleError = _ref.handleGoogleError,
      responseGoogle = _ref.responseGoogle,
      checkShouldShowGoogleLogin = _ref.checkShouldShowGoogleLogin,
      redirectUri = _ref.redirectUri,
      facebookAppId = _ref.facebookAppId,
      googleClientId = _ref.googleClientId,
      termsOfServiceUrl = _ref.termsOfServiceUrl;

  if (step === 2) {
    return /*#__PURE__*/React__default.createElement(SignUpForm, {
      step: step,
      next: next,
      back: back,
      toggleAuthLayout: toggleAuthLayout,
      handleChange: handleChange,
      handleSubmit: handleSubmit,
      isSubmitting: isSubmitting
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--auth-form')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--main')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('title')
  }, "\u8A3B\u518A\u65B0\u5E33\u865F"), /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--image', 'dialog')
  }, /*#__PURE__*/React__default.createElement(WebpImg, {
    imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/dialog.png",
    alt: "dialog",
    lazyLoad: false
  })), /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--image', 'cuties')
  }, /*#__PURE__*/React__default.createElement(WebpImg, {
    imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/sign_up_cuties",
    alt: "sign-up cuties",
    lazyLoad: false
  })), /*#__PURE__*/React__default.createElement(FacebookLogin, {
    appId: facebookAppId,
    fields: "name,email",
    scope: "public_profile,email",
    callback: responseFacebook,
    responseType: "token",
    redirectUri: redirectUri,
    onFailure: handleFBError,
    render: function render(renderProps) {
      return /*#__PURE__*/React__default.createElement("button", {
        className: cx$3('container--action'),
        onClick: renderProps.onClick,
        type: "button"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$3('content')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$3('container--icon')
      }, /*#__PURE__*/React__default.createElement(WebpImg, {
        imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/facebook.png",
        alt: "facebook",
        lazyLoad: false
      })), "Facebook \u8A3B\u518A"));
    }
  }), checkShouldShowGoogleLogin() && /*#__PURE__*/React__default.createElement(GoogleLogin, {
    clientId: googleClientId,
    buttonText: "Google \u767B\u5165",
    onSuccess: responseGoogle,
    onFailure: handleGoogleError,
    cookiePolicy: "single_host_origin",
    className: cx$3('btn-google-login'),
    render: function render(renderProps) {
      return /*#__PURE__*/React__default.createElement("button", {
        className: cx$3('container--action'),
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        type: "button"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$3('content')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: cx$3('container--icon')
      }, /*#__PURE__*/React__default.createElement(WebpImg, {
        imgUrl: "https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/google.png",
        alt: "google",
        lazyLoad: false
      })), "Google \u8A3B\u518A"));
    }
  }), /*#__PURE__*/React__default.createElement("button", {
    className: cx$3('container--action'),
    onClick: next,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('content')
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeRegularSvgIcons.faEnvelope,
    className: cx$3('container--icon')
  }), "Email \u8A3B\u518A")), /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--prompt')
  }, "\u5DF2\u7D93\u6709\u5E33\u865F\u4E86\uFF1F", ' ', /*#__PURE__*/React__default.createElement("span", {
    className: cx$3('hint'),
    onClick: toggleAuthLayout,
    role: "button",
    tabIndex: "0"
  }, "\u767B\u5165")), /*#__PURE__*/React__default.createElement("div", {
    className: cx$3('container--prompt')
  }, "\u8A3B\u518A\u5373\u8868\u793A\u60A8\u5DF2\u95B1\u8B80\u4E26\u540C\u610F", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("a", {
    target: "_blank",
    className: cx$3('hint'),
    href: termsOfServiceUrl
  }, "\u4F7F\u7528\u8005\u689D\u6B3E"))));
}

SignUpForm$1.propTypes = {
  onFinish: propTypes.func.isRequired,
  onRequest: propTypes.func.isRequired,
  onSuccess: propTypes.func,
  onFail: propTypes.func
};
SignUpForm$1.defaultProps = {
  onSuccess: null,
  onFail: null
};
var styles$3 = {};
var cx$4 = classNames.bind(styles$3);

function AuthForm(_ref) {
  var onFail = _ref.onFail,
      onFinish = _ref.onFinish,
      onRequest = _ref.onRequest,
      onSubmit = _ref.onSubmit,
      handleOnSuccess = _ref.handleOnSuccess,
      responseFacebook = _ref.responseFacebook,
      handleFBError = _ref.handleFBError,
      responseGoogle = _ref.responseGoogle,
      handleGoogleError = _ref.handleGoogleError,
      redirectUri = _ref.redirectUri;

  var _useState = React.useState('sign-in'),
      authLayout = _useState[0],
      setAuthLayout = _useState[1];

  var _useState2 = React.useState(1),
      step = _useState2[0],
      setStep = _useState2[1];

  var next = function next() {
    setStep(function (prevState) {
      return prevState + 1;
    });
  };

  var back = function back() {
    setStep(function (prevState) {
      return prevState - 1;
    });
  };

  var toggleAuthLayout = function toggleAuthLayout() {
    var layout;

    if (authLayout === 'sign-up') {
      layout = 'sign-in';
    } else {
      layout = 'sign-up';
    }

    setAuthLayout(layout);
    setStep(1);
  };

  var FormComp = authLayout === 'sign-in' ? SignInForm$1 : SignUpForm$1;
  var SETTINGS_MAPPING = {
    'sign-in': {
      initialValues: {
        email: '',
        password: ''
      },
      validator: signInValidate,
      defaultCtaText: '登入'
    },
    'sign-up': {
      initialValues: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      validator: signUpValidate,
      defaultCtaText: '註冊新帳號'
    }
  };
  var _SETTINGS_MAPPING$aut = SETTINGS_MAPPING[authLayout],
      initialValues = _SETTINGS_MAPPING$aut.initialValues,
      validator = _SETTINGS_MAPPING$aut.validator;

  var checkShouldShowGoogleLogin = function checkShouldShowGoogleLogin() {
    if (isIosWebview() || isAndroidWebview()) return false;
    return true;
  };

  var componentOnFinish = function componentOnFinish() {
    if (onFinish) onFinish();
  };

  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: initialValues,
    validate: function validate(values) {
      return validator(values);
    },
    onSubmit: onSubmit,
    render: function render(formikProps) {
      var handleChange = formikProps.handleChange,
          handleSubmit = formikProps.handleSubmit,
          isSubmitting = formikProps.isSubmitting;
      return /*#__PURE__*/React__default.createElement(formik.Form, {
        id: "auth-form"
      }, /*#__PURE__*/React__default.createElement(FormComp, {
        onSuccess: handleOnSuccess,
        onFinish: componentOnFinish,
        onRequest: onRequest,
        onFail: onFail,
        step: step,
        toggleAuthLayout: toggleAuthLayout,
        next: next,
        back: back,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        isSubmitting: isSubmitting,
        responseFacebook: responseFacebook,
        handleFBError: handleFBError,
        responseGoogle: responseGoogle,
        handleGoogleError: handleGoogleError,
        checkShouldShowGoogleLogin: checkShouldShowGoogleLogin,
        redirectUri: redirectUri
      }));
    }
  });
}

AuthForm.propTypes = {
  onFinish: propTypes.func.isRequired,
  onRequest: propTypes.func.isRequired,
  onSuccess: propTypes.func,
  onFail: propTypes.func
};
AuthForm.defaultProps = {
  onSuccess: null,
  onFail: null
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.ExampleComponent = ExampleComponent;
exports["default"] = AuthForm;
//# sourceMappingURL=index.modern.js.map
