module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @desc webpack打包入口
 */
var moduleExports = {};

var r = __webpack_require__(1);

r.keys().forEach(function (key) {
  var attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')); // '_'开头的认为是私有函数或者方法；

  if (attr.indexOf('_') !== 0) {
    moduleExports[attr] = r(key);
  }
});
module.exports = moduleExports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_utils/_date.js": 2,
	"./_utils/_number.js": 3,
	"./_utils/_type.js": 4,
	"./_utils/_xssTrim.js": 5,
	"./boolean/isArray.js": 6,
	"./boolean/isBoolean.js": 7,
	"./boolean/isDate.js": 8,
	"./boolean/isError.js": 9,
	"./boolean/isFunction.js": 10,
	"./boolean/isLeapYear.js": 11,
	"./boolean/isNumber.js": 12,
	"./boolean/isObject.js": 13,
	"./boolean/isRegExp.js": 14,
	"./boolean/isString.js": 15,
	"./color/colorRandom.js": 16,
	"./color/hexToRgb.js": 17,
	"./color/rgbToHex.js": 18,
	"./function/debounce.js": 19,
	"./function/throttle.js": 20,
	"./number/numberFormat.js": 21,
	"./object/deepClone.js": 22,
	"./object/objectToString.js": 23,
	"./secure/xssDecode.js": 24,
	"./secure/xssEncode.js": 25,
	"./string/stringToObject.js": 26,
	"./time/dateFormat.js": 27,
	"./time/dateNature.js": 28,
	"./time/preciseCountDownTimer.js": 29
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 关于Date的快捷操作
var _dateUtils = {};

var _numberUtils = __webpack_require__(3); // 把小于10的数字，前面补零；


var _tf = _numberUtils.numberPatchZero; // 把传入的对象，转换为一个有效的时间对象，并返回该时间对象
// 如果无法正常解析成date对象，则直接抛错；

function _toDate(date) {
  var _type = _typeof(date);

  var _str = '';
  var _date = null; // 如果没有传入值，则直接返回当前时间；

  if (!date) {
    return new Date();
  } // 如果是日期对象


  if (date instanceof Date) {
    return date;
  } else if (_type === 'number') {
    // 如果是传入的是数字，判断是否为合法的数字；
    _str = date.toString();

    if (_str.length === 13) {
      // 毫秒
      return new Date(date);
    } else if (_str.length === 10) {
      // 秒
      return new Date(date * 1000);
    }

    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
  } else if (_type === 'string') {
    // 如果是字符串，判断是否为合法的类似于时间的字符串；
    _date = date.replace(/[^\d\s:]+/g, '/');
  }

  _date = new Date(_date);

  if (isNaN(_date.getDate())) {
    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
  }

  return _date;
}

_dateUtils.toDate = _toDate; // 根据毫秒数，转换成一个对象，目前只想到用于倒计时

function _trimCountDownSecs(secs) {
  var data = {};

  var _secs = Math.floor(secs / 1000);

  var arr = []; // 剩余毫秒数

  data.msecs = secs; // 剩余秒数

  data.secs = _secs; // 剩余分钟 

  data.min = Math.floor(_secs / 60); // 剩余小时 

  data.hour = Math.floor(_secs / 3600); // 剩余天数

  data.day = Math.floor(_secs / (3600 * 24)); // 剩余天数数据

  data.arr = arr; // 天

  arr.push(_tf(data.day)); // 小时

  _secs = _secs % (3600 * 24);
  arr.push(_tf(Math.floor(_secs / 3600))); // 分

  _secs = _secs % 3600;
  arr.push(_tf(Math.floor(_secs / 60))); // 秒

  arr.push(_tf(Math.floor(_secs % 60)));
  return data;
}

_dateUtils.trimCountDownSecs = _trimCountDownSecs;
module.exports = _dateUtils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// 数字相关的一些操作；
var _numberUtils = {};

var checkType = __webpack_require__(4);

var isNumber = function isNumber(value) {
  return checkType(value) === 'number';
}; // 个位数补零，变成两位的字符串；


function _numberPatchZero(num) {
  // 如果不是Number类型，直接返回；
  if (!isNumber(num)) {
    return num;
  } // 如果是NaN，则返回NaN的字符串


  if (isNaN(num)) {
    return String(num);
  } // 如果是个位数，则直接给个位数补0；


  return (num < 10 ? '0' : '') + num;
}

_numberUtils.numberPatchZero = _numberPatchZero;
module.exports = _numberUtils;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var typeList = ['Boolean', 'Number', 'String', 'Function', 'Array', 'RegExp', 'Object', 'Error', 'Date'];
var class2type = {};
var _toString = class2type.toString;
typeList.forEach(function (item) {
  class2type['[object ' + item + ']'] = item.toLowerCase();
});

function checkType(obj) {
  if (obj === null || obj === undefined) {
    return String(obj);
  }

  return class2type[_toString.call(obj)] || 'object';
}

module.exports = checkType;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method xssTrim
 * @method xssTrim.encode xss的编码
 * @method xssTrim.decode xss的解码
 *
 */
var xssTrim = {};

var checkType = __webpack_require__(4); // xss的编码


xssTrim.encode = function (str) {
  var _str = str; // 如果为非字符串格式，转换为字符串

  if (checkType(_str) !== 'string') {
    _str = String(_str);
  } // 如果字符串为空，则直接返回


  if (!_str) {
    return _str;
  }

  return _str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\s/g, '&nbsp;');
}; // xss解码


xssTrim.decode = function (str) {
  var _str = str; // 如果为非字符串格式，转换为字符串

  if (checkType(_str) !== 'string') {
    _str = String(_str);
  } // 如果字符串为空，则直接返回


  if (!_str) {
    return _str;
  }

  return _str.replace(/&amp;?/g, '&').replace(/&lt;?/g, '<').replace(/&quot;?/g, '"').replace(/&#39;?/g, '\'').replace(/&nbsp;?/g, ' ');
};

module.exports = xssTrim;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isArray
 * @since version 1.0.0
 * @desc 判断是否为数组类型
 * @param {Array} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isArray(value);
 */
var checkType = __webpack_require__(4);

function isArray(value) {
  return checkType(value) === 'array';
}

module.exports = isArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isBoolean
 * @since version 1.0.0
 * @desc 判断是否为布尔值类型
 * @param {Boolean} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isBoolean(value);
 */
var checkType = __webpack_require__(4);

function isBoolean(value) {
  return checkType(value) === 'boolean';
}

module.exports = isBoolean;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isDate
 * @since version 1.0.0
 * @desc 判断是否为Date类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isDate(value);
 */
var checkType = __webpack_require__(4);

function isDate(value) {
  return checkType(value) === 'date';
}

module.exports = isDate;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isError
 * @since version 1.0.0
 * @desc 判断是否为Error对象
 * @param {Error} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isError(value);
 */
var checkType = __webpack_require__(4);

function isError(value) {
  return checkType(value) === 'error';
}

module.exports = isError;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isFunction
 * @since version 1.0.0
 * @desc 判断是否为函数
 * @param {Function} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isFunction(value);
 */
var checkType = __webpack_require__(4);

function isFunction(value) {
  return checkType(value) === 'function';
}

module.exports = isFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * @method isLeapYear
 * @since version 1.0.0
 * @desc 判断是否为闰年
 * @param {Number} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isLeapYear(value);
 */
function _isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }

  return false;
}

module.exports = _isLeapYear;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isNumber
 * @since version 1.0.0
 * @desc 判断是否为数字类型
 * @param {Number} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isNumber(value);
 */
var checkType = __webpack_require__(4);

function isNumber(value) {
  return checkType(value) === 'number';
}

module.exports = isNumber;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isObject
 * @since version 1.0.0
 * @desc 判断是否为对象类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isObject(value);
 */
var checkType = __webpack_require__(4);

function isObject(value) {
  return checkType(value) === 'object';
}

module.exports = isObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isRegExp
 * @since version 1.0.0
 * @desc 判断是否为正则类型
 * @param {RegExp} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isRegExp(value);
 */
var checkType = __webpack_require__(4);

function isRegExp(value) {
  return checkType(value) === 'regexp';
}

module.exports = isRegExp;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method isString
 * @since version 1.0.0
 * @desc 判断是否为字符串类型
 * @param {String} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isString(value);
 */
var checkType = __webpack_require__(4);

function isString(value) {
  return checkType(value) === 'string';
}

module.exports = isString;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * @method colorRandom
 * @since version 1.0.0
 * @desc 生成一个随机的颜色
 * @return {String} 一个随机的HEX格式的颜色
 *
 * @example fdutils.colorRandom();
 * @result {String} '#000000'
 *
 */
function _colorRandom() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

module.exports = _colorRandom;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * @method hexToRgb
 * @since version 1.0.0
 * @desc 根据hex的值，生成rgb格式的值，支持hex8 -> rgba
 * @param 
 * @return {String} 返回生成的rgb或者rgba格式的值
 *
 * @example fdutils.hexToRgb('#000000');
 * @result {String} 'rgb(0,0,0)'
 *
 */
function _hexToRgb(hex) {
  var _hex = String(hex);

  var _len = _hex.length; // 以 # 号开头

  if (_hex.indexOf('#') !== 0) {
    throw new TypeError('fdutils.hexToRgb传入的参数格式不正确，请检查');
  } // 移除 # 号


  _hex = _hex.substring(1);
  _len = _hex.length; // 如果长度为3或者4 ，则进行补全到6或者8

  if (_len === 3 || _len === 4) {
    /// 字符串拼接，性能最佳
    _hex = _hex[0] + _hex[0] + _hex[1] + _hex[1] + _hex[2] + _hex[2] + (_hex[3] || '') + (_hex[3] || '');
    _len = _len * 2;
  } // 如果长度或者字符格式不对，则抛出错误


  if (_len !== 6 && _len !== 8 && /^[0-9a-fA-F]+$/.test(_hex)) {
    throw new TypeError('fdutils.hexToRgb传入的参数格式不正确，请检查');
  }

  var r = parseInt('0x' + _hex.slice(0, 2), 16);
  var g = parseInt('0x' + _hex.slice(2, 4), 16);
  var b = parseInt('0x' + _hex.slice(4, 6), 16);
  var a = 1; // 如果有透明度的设置

  if (_len === 8) {
    a = Math.round(parseInt('0x' + _hex.slice(6, 8), 16) * 100 / 255) / 100;
  } // 根据a的值，分别返回


  if (a === 1) {
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
  } else {
    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  }
}

module.exports = _hexToRgb;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * @method rgbToHex
 * @since version 1.0.0
 * @desc 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
 * @param 
 * @return {String} 返回生成的hex或者hex8格式的颜色值
 *
 * @example fdutils.rgbToHex('rgb(0,0,0)');
 * @result {String} '#000000'
 *
 */
// 把数字变成两位的16进制
var xToOX = function xToOX(num) {
  var _num = num.toString(16);

  return _num.length === 1 ? "0".concat(_num) : _num;
}; // 判断数字的范围，rgba的范围在 [0, 255]区间


var _trimRgbNum = function _trimRgbNum(num) {
  // 判断数字的范围
  if (num < 0 || num > 255) {
    throw new TypeError('fdutils.rgbToHex参数不合法，小于 0 或者大于 255，请检查');
  }

  return num;
};

function _rgbToHex(rgb) {
  var _rgb = String(rgb).replace(/\s+/g, '');

  var _lIndex = _rgb.indexOf('(');

  var _rIndex = _rgb.indexOf(')'); // 如果不是一个rgb或者rgba开头的，则直接抛错


  if (_rgb.indexOf('rgba(') !== 0 && _rgb.indexOf('rgb(') !== 0) {
    throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
  } // 如果找不到_lIndex，_rIndex，或者这两个的位置不正确，则表示错误


  if (_lIndex === -1 || _rIndex === -1 || _lIndex >= _rIndex) {
    throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
  } // 截断字符串，剩余1,1,1,1的格式；


  _rgb = _rgb.substring(_lIndex + 1, _rIndex);

  var _rgbArr = _rgb.split(',');

  var _len = _rgbArr.length; // 判断格式是否正确

  if (_len !== 3 && _len !== 4 || !/[\d,]+/g.test(_rgb)) {
    throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
  }

  var _r = xToOX(_trimRgbNum(Number(_rgbArr[0] || '')));

  var _g = xToOX(_trimRgbNum(Number(_rgbArr[1] || '')));

  var _b = xToOX(_trimRgbNum(Number(_rgbArr[2] || '')));

  var _a = _rgbArr[3] || ''; // 如果是3位数


  if (_len === 3) {
    return "#".concat(_r).concat(_g).concat(_b);
  } else {
    _a = xToOX(_trimRgbNum(Math.round((!isNaN(_a) ? _a : 1) * 255)));
    return "#".concat(_r).concat(_g).concat(_b).concat(_a);
  }
}

module.exports = _rgbToHex;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method debounce
 * @since version 1.0.0
 * @desc 函数防抖，只触发最后一次调用；
 * @param {Function} callback 防抖后的回调函数；
 * @param {Number} wait 防抖的限制时间，单位毫秒（ms），默认100；
 * @param {Number} maxWait 最大防抖间隔，maxWait的时间内，必定会执行一次，默认为0，不限制；
 */
var isFunction = __webpack_require__(10);

var isNumber = __webpack_require__(12);

var debounce = function debounce(callback, wait, maxWait) {
  var _timer; // 计时器


  var _context; // 内部this


  var _args; // 变量


  var _wait = isNumber(wait) ? wait || 100 : 100; // 防抖时间间隔，


  var _maxWait = isNumber(maxWait) ? maxWait || 0 : 0; // 如果是整数，那么在该整数间隔内，必定执行一次


  var _timestamp = Date.now();

  var _prevExecute = _timestamp;

  var checkWidthWait = function checkWidthWait(_now) {
    // 如果超出了限制间隔时间，那么就执行一次
    if (_now - _timestamp >= _wait) {
      return true;
    } // 如果没有超出，则更新当前触发的时间戳；


    _timestamp = _now;
    return false;
  }; // 如果设置了maxWait的时候，


  var checkWidthMaxWait = function checkWidthMaxWait(_now) {
    // 如果执行间隔，已经大于最大间隔了，就需要执行一次；
    if (_now - _prevExecute >= _maxWait) {
      return true;
    }

    return checkWidthWait(_now, _wait);
  }; // 根据是否有最大执行间隔，做一个懒载入；


  var needRun = _maxWait ? checkWidthMaxWait : checkWidthWait; // 执行回调

  var run = function run() {
    var _now = Date.now();

    clearTimeout(_timer); // 记录执行时间

    _prevExecute = _now;
    _timestamp = _now; // 执行

    callback.apply(_context, _args);
  };

  var cb = function cb() {
    var _now = Date.now();

    _context = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _args = args; // 判断是否有限制最大间隔执行

    if (!needRun(_now)) {
      clearTimeout(_timer);
      _timer = setTimeout(run, _wait);
      return;
    } // 触发了间隔或者强制执行的逻辑；


    run();
  }; // 检查callback的类型


  if (!isFunction(callback)) {
    throw new Error('debounce 的第一参数需要是一个函数');
  }

  return cb;
};

module.exports = debounce;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method throttle
 * @since version 1.0.0
 * @desc 函数节流，一定时间内，只执行一次回调函数
 * @param {Function} callback 节流后的回调函数；
 * @param {Number} wait 节流的限制时间，单位毫秒（ms），默认100；
 * @param {Boolean} immediate 节流模式，默认为false（倒计时的最后）
 */
var isFunction = __webpack_require__(10);

var isNumber = __webpack_require__(12);

var isBoolean = __webpack_require__(7);

var throttle = function throttle(callback, wait, immediate) {
  var _timer; // 计时器


  var _context; // 内部this指向


  var _args; // 变量


  var _wait = isNumber(wait) ? wait || 100 : 100; // 节流时间间隔，
  // 是否立即执行，默认值为false


  var _immediate = isBoolean(immediate) ? immediate : false;

  var cb = function cb() {
    _context = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _args = args; // 正在节流中

    if (_timer) {
      return;
    } // 是否立即执行节流


    if (_immediate) {
      callback.apply(_context, _args);
    }

    _timer = setTimeout(function () {
      if (!immediate) {
        callback.apply(_context, _args);
      }

      clearTimeout(_timer);
      _timer = 0;
    }, _wait);
  }; // 检查callback的类型


  if (!isFunction(callback)) {
    throw new Error('throttle 的第一参数需要是一个函数');
  }

  return cb;
};

module.exports = throttle;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method numberFormat
 * @since version 1.0.0
 * @desc 把数字字符串进行分割，支持字符串类型的数字
 * @props {String/Number} number 待转换的数字，必须是整数，不能是浮点型
 * @props {Number} length 每一个小单元的长度，默认值为 3
 * @props {String} sep 分隔符，默认值为“,”
 * @return {String} 使用分隔符，分割好的数字字符串；
 *
 * @example fdutils.numberFormat({
 *      number : 1234567,
 *      length : 3,
 *      sep : '-',
 * });
 * @result {String} "1-234-567"
 *
 */
var isObject = __webpack_require__(13); // 获取前置符号


var _getPositiveFlag = function _getPositiveFlag(str) {
  if (str.indexOf('-') === 0) {
    return '-';
  }

  if (str.indexOf('+') === 0) {
    return '+';
  }

  return '';
};

function _numberFormat(options) {
  if (!isObject(options)) {
    throw new Error('numberFormat入参有误！');
  }

  var _number = String(options.number);

  var _len = parseInt(options.length, 10) || 3;

  var _sep = String(options.sep || '') || ',';

  var _positiveFlag = _getPositiveFlag(_number);

  var _curLen = 0;
  var _resultArr = [];
  var numberStringReg = /^\d+$/g;
  var clearFirstZeroReg = /^[+-]?0*/g; // 如果是0，则直接返回

  if (_number === '0' || _number === '-0' || _number === '+0') {
    return _number;
  }

  _number = _number.replace(clearFirstZeroReg, ''); // 判断是否为合法的数字字符串；

  if (!numberStringReg.test(_number)) {
    throw new Error('numberFormat传入的number不是一个有效的整数！');
  }

  _curLen = _number.length; // 如果长度短，可以直接返回

  if (_curLen <= _len) {
    return _positiveFlag + _number;
  } // 循环获取


  while (_curLen > _len) {
    _resultArr.unshift(_number.substr(_curLen - _len, _len));

    _curLen = _curLen - _len;
  }

  _resultArr.unshift(_number.substr(0, _curLen));

  return _positiveFlag + _resultArr.join(_sep);
}

module.exports = _numberFormat;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @method deepClone
 * @since version 1.0.0
 * @desc 深copy，如果不是对象，则直接返回
 * @param {Any} values 待copy的数据
 * @return {Any} copy之后的值
 *
 * @example fdutils.deepClone({
 *      number : 1234567,
 * });
 * @result {Object} {
 *      number : 1234567,
 * }
 *
 */
var isObject = __webpack_require__(13);

var isArray = __webpack_require__(6);

var isDate = __webpack_require__(8);

function _deepClone(value) {
  var _clone; // 如果是非对象，并且等于null时，直接返回；


  if (value === null || _typeof(value) !== 'object') {
    return value;
  } // 如果是当前数据是一个日期对象时


  if (isDate(value)) {
    _clone = new Date(value.getTime());
    return _clone;
  } // 如果当前数据是一个数组时


  if (isArray(value)) {
    var i = 0;
    var len = value.length;
    _clone = [];

    for (i; i < len; i++) {
      _clone[i] = _deepClone(value[i]);
    }

    return _clone;
  } // 如果是一个正常的对象；


  if (isObject(value)) {
    var attr = '';
    _clone = {};

    for (attr in value) {
      if (value.hasOwnProperty(attr)) {
        _clone[attr] = _deepClone(value[attr]);
      }
    }

    return _clone;
  } // 如果执行到这里，表示：为对象模式，但是却不是：Date，Array，Object；
  // 有可能是Function等，此时直接返回原值；


  return value;
}

module.exports = _deepClone;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @method objectToString
 * @since version 1.0.0
 * @desc 把规定格式的Object转换为String格式
 * @params {Object} obj 待转换的对象
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回对象转换后的字符串；
 *
 * @example fdutils.objectToString({a: 1, b: 2});
 * @return 'a=1&b=2'
 *
 */
var isObject = __webpack_require__(13);

function _objectToString(obj, sep) {
  var _sep = String(sep || '&');

  var _obj = obj;
  var _arr = []; // 是否为对象，如果不是对象，那么直接抛错

  if (!_obj && !isObject(_obj)) {
    throw new Error('解析fdutils.objectToString时，传入的参数非对象格式，请确认', _obj);
  } // 循环拆分


  for (var _i = 0, _Object$entries = Object.entries(_obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value instanceof Object) {
      throw new Error('解析fdutils.objectToString时，传入的参数不支持多层对象嵌套，请确认', value);
    }

    _arr.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
  }

  return _arr.join(_sep);
}

module.exports = _objectToString;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method xssDecode
 * @since version 1.0.0
 * @desc 进行XSS编码
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example fdutils.xssEncode(string);
 *
 */
var _xssTrim = __webpack_require__(5);

function _xssDecode(str) {
  return _xssTrim.decode(str);
}

module.exports = _xssDecode;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method xssEncode
 * @since version 1.0.0
 * @desc 进行XSS编码
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example fdutils.xssEncode(string);
 *
 */
var _xssTrim = __webpack_require__(5);

function _xssEncode(str) {
  return _xssTrim.encode(str);
}

module.exports = _xssEncode;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * @method stringToObject
 * @since version 1.0.0
 * @desc 把规定格式的Str转换为Object格式
 * @params {String} str 待转换的字符串
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回编码转换的字符串
 *
 * @example fdutils.stringToObject('a=1&b=2');
 * @return {a: 1, b: 2}
 *
 */
// 常用的转换格式变化
var _conversion = {
  'undefined': undefined,
  'null': null,
  'false': false,
  'true': true
};

function _stringToObject(str, sep) {
  var _sep = String(sep || '&');

  var _str = String(str);

  var _obj = {}; // 循环拆分

  _str.split(_sep).forEach(function (item) {
    var _arr = item.split('=');

    var _key = _arr[0];
    var _value = _arr[1]; // 如果长度为空，那么直接不做任何处理；

    if (_arr.length === 0) {
      return;
    } // 如果格式不对，则抛弃这部分；


    if (_arr.length > 2 || !_key) {
      throw new Error('解析fdutils.stringToObject时，传入的参数有误，请确认', str);
    } // 如果对应的值为undefined，那么依然设置为undefined
    // 如果对应的值为null，设置为null
    // false字符串被转成 ： false
    // true字符串被转成：true


    if (_conversion.hasOwnProperty(_value)) {
      _value = _conversion[_value];
    } else if (_value === undefined) {// 如果该部分只设置了key，没有设置值，就直接处理成
      // 这个时候，不做任何处理
    } else if (!isNaN(_value)) {
      // 如果数字长度，超过15位，那么就不做转换；
      // 或者以0开头的，就还是按照字符串处理；
      _value = _value.length > 15 || _value.indexOf('0') === 0 ? _value : Number(_value);
    } else {
      _value = decodeURIComponent(_value);
    }

    _obj[_key] = _value;
  });

  return _obj;
}

module.exports = _stringToObject;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @method dateFormat
 * @since version 1.0.0
 * @desc 转换为指定格式的时间
 * @props {String} format 转换成的目标格式，默认值为:"yyyy/mm/dd hh:ii"
 * @props {Number/String/Date} date   输入的时间戳，或者待转换的时间，不传该属性是，取当前的时间戳
 * @return {String} 返回转换好的指定的日期时间的字符串
 *
 * @example fdutils.dateFormat({
 *		format : "yyyy-mm-dd hh时ii分ss秒",
 * 		date : "2019/04/27 16:24:12"
 * });
 * @result {String} "2019-04-27 16时24分12秒"
 *
 */
var _dateUtils = __webpack_require__(2);

var _numberUtils = __webpack_require__(3); // 把传入的值，尝试转换为日期对象；


var _toDate = _dateUtils.toDate; // 把小于10的数字，前面补零；

var _tf = _numberUtils.numberPatchZero; // 正则替换

var _proxy = {
  'yyyy': function yyyy(date) {
    return date.getFullYear();
  },
  'mm': function mm(date) {
    return _tf(date.getMonth() + 1);
  },
  'dd': function dd(date) {
    return _tf(date.getDate());
  },
  'hh': function hh(date) {
    return _tf(date.getHours());
  },
  'ii': function ii(date) {
    return _tf(date.getMinutes());
  },
  'ss': function ss(date) {
    return _tf(date.getSeconds());
  }
};

function dateFormat(options) {
  if (!options || _typeof(options) !== 'object') {
    throw new TypeError('调用dateFormat时，传入的参数有误！');
  }

  var format = options.format;

  var date = _toDate(options.date);

  if (!format || typeof format !== 'string') {
    format = 'yyyy/mm/dd hh:ii';
  }

  return format.replace(/yyyy|mm|dd|hh|ii|ss/g, function (key) {
    return _proxy[key](date);
  });
}

module.exports = dateFormat;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @method dateNature
 * @since version 1.0.0
 * @desc 根据传入的日期，转换出一些指定的节日信息
 * @props {String} format 转换成的目标格式，默认值为:"yyyy/mm/dd hh:ii"
 * @props {Number/String/Date} date   输入的时间戳，或者待转换的时间，不传该属性是，取当前的时间戳
 * @return {String} 返回转换好的指定的日期时间的字符串
 *
 * @example fdutils.dateNature("2019/04/27");
 * 
 * @result {Object} "当前天的农历，阳历，节日，节气等信息"
 *  {
 *   "festival":{
 *     "solar":"公历节日",
 *     "week":"周节日",
 *     "lunar":"农历节日"
 *   },
 *   "lunar":{
 *     "year": "农历 年",
 *     "month": "农历 月",
 *     "day": "农历 日",
 *     "leap": "今年闰月是几月",
 *     "isLeap": "今年是否为闰年",
 *   },
 *   "solar":{
 *     "year": "阳历 年",
 *     "month": "阳历 月",
 *     "day": "阳历 日",
 *     "week": "阳历 周",
 *   },
 *   "isToday": "是否为当天",
 *   "distanceToday": "距离今天还有几天时间",
 *   "solarTerms": "节气"
 * }
 *
 */
var _dateUtils = __webpack_require__(2);

var _numberUtils = __webpack_require__(3);

var _isDate = __webpack_require__(8);

var _dateFormat = __webpack_require__(27); // 把传入的值，尝试转换为日期对象；


var _toDate = _dateUtils.toDate; // 把小于10的数字，前面补零；

var _tf = _numberUtils.numberPatchZero; //定义一些私有变量，用于定义计算农历，以及一些节日的概念
//用于判断，农历的年份，月份，闰月等相关信息的一个配置数组

var tInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63]; //公历每月的天数
// const solarMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
// 节气

var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']; // 

var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]; //国历节日 *表示放假日

var sFtv = {
  '0101': '元旦',
  '0106': '中国第13亿人口日',
  '0108': '周恩来逝世纪念日',
  '0115': '释迦如来成道日',
  '0121': '列宁逝世纪念日 国际声援南非日 弥勒佛诞辰',
  '0202': '世界湿地日',
  '0207': '二七大罢工纪念日',
  '0210': '国际气象节',
  '0214': '情人节',
  '0215': '中国12亿人口日',
  '0219': '邓小平逝世纪念日',
  '0221': '国际母语日 反对殖民制度斗争日',
  '0222': '苗族芦笙节',
  '0224': '第三世界青年日',
  '0228': '世界居住条件调查日',
  '0301': '国际海豹日',
  '0303': '全国爱耳日',
  '0305': '学雷锋纪念日 中国青年志愿者服务日',
  '0308': '妇女节',
  '0309': '保护母亲河日',
  '0311': '国际尊严尊敬日',
  '0312': '植树节',
  '0314': '国际警察日 白色情人节',
  '0315': '消费者权益日',
  '0316': '手拉手情系贫困小伙伴全国统一行动日',
  '0317': '中国国医节 国际航海日  爱尔兰圣帕特里克节',
  '0318': '全国科技人才活动日',
  '0321': '世界森林日 消除种族歧视国际日 世界儿歌日 世界睡眠日',
  '0322': '世界水日',
  '0323': '世界气象日',
  '0324': '世界防治结核病日',
  '0325': '全国中小学生安全教育日',
  '0329': '中国黄花岗七十二烈士殉难纪念',
  '0330': '巴勒斯坦国土日',
  '0401': '愚人节',
  '0402': '国际儿童图书日',
  '0407': '世界卫生日',
  '0411': '世界帕金森病日',
  '0421': '全国企业家活动日',
  '0422': '世界地球日 世界法律日',
  '0423': '世界图书和版权日',
  '0424': '亚非新闻工作者日 世界青年反对殖民主义日',
  '0425': '全国预防接种宣传日',
  '0426': '世界知识产权日',
  '0430': '世界交通安全反思日',
  '0501': '国际劳动节',
  '0503': '世界哮喘日 世界新闻自由日',
  '0504': '青年节',
  '0505': '碘缺乏病防治日 日本男孩节',
  '0508': '世界红十字日',
  '0512': '国际护士节',
  '0515': '国际家庭日',
  '0517': '国际电信日',
  '0518': '国际博物馆日',
  '0520': '全国学生营养日 全国母乳喂养宣传日',
  '0523': '国际牛奶日',
  '0526': '世界向人体条件挑战日',
  '0530': '中国“五卅”运动纪念日',
  '0531': '世界无烟日 英国银行休假日',
  '0601': '国际儿童节',
  '0605': '世界环境保护日',
  '0614': '世界献血者日',
  '0617': '防治荒漠化和干旱日',
  '0620': '世界难民日',
  '0622': '中国儿童慈善活动日',
  '0623': '国际奥林匹克日',
  '0625': '全国土地日',
  '0626': '国际禁毒日 国际宪章日 禁止药物滥用和非法贩运国际日 支援酷刑受害者国际日',
  '0630': '世界青年联欢节',
  '0701': '建党节',
  '0702': '国际体育记者日',
  '0706': '朱德逝世纪念日',
  '0707': '抗日战争纪念日',
  '0711': '世界人口日 中国航海日',
  '0726': '世界语创立日',
  '0728': '第一次世界大战爆发',
  '0730': '非洲妇女日',
  '0801': '建军节',
  '0805': '恩格斯逝世纪念日',
  '0806': '国际电影节',
  '0808': '中国男子节(爸爸节)',
  '0812': '国际青年节',
  '0813': '国际左撇子日',
  '0815': '抗日战争胜利纪念',
  '0826': '全国律师咨询日',
  '0902': '日本签署无条件投降书日',
  '0903': '中国抗日战争胜利纪念日',
  '0905': '瑞士萨永中世纪节',
  '0906': '帕瓦罗蒂去世',
  '0908': '国际扫盲日 国际新闻工作者日',
  '0909': '毛泽东逝世纪念日',
  '0910': '教师节',
  '0914': '世界清洁地球日',
  '0916': '国际臭氧层保护日 中国脑健康日',
  '0918': '九·一八事变纪念日',
  '0920': '国际爱牙日',
  '0921': '世界停火日 预防世界老年性痴呆宣传日',
  '0927': '世界旅游日',
  '0928': '孔子诞辰',
  '0930': '国际翻译日',
  '1001': '国庆节',
  '1002': '国庆节假日 国际和平与民主自由斗争日',
  '1003': '国庆节假日',
  '1004': '世界动物日',
  '1005': '国际教师节',
  '1006': '中国老年节',
  '1008': '全国高血压日 世界视觉日',
  '1009': '世界邮政日 万国邮联日',
  '1010': '辛亥革命纪念日 世界精神卫生日 世界居室卫生日',
  '1013': '世界保健日 国际教师节 中国少年先锋队诞辰日 世界保健日',
  '1014': '世界标准日',
  '1015': '国际盲人节(白手杖节)',
  '1016': '世界粮食日',
  '1017': '世界消除贫困日',
  '1020': '世界骨质疏松日',
  '1022': '世界传统医药日',
  '1024': '联合国日 世界发展新闻日',
  '1028': '中国男性健康日',
  '1031': '万圣节',
  '1102': '达摩祖师圣诞',
  '1106': '柴科夫斯基逝世悼念日',
  '1107': '十月社会主义革命纪念日',
  '1108': '中国记者日',
  '1109': '全国消防安全宣传教育日',
  '1110': '世界青年节',
  '1111': '光棍节',
  '1112': '孙中山诞辰纪念日',
  '1114': '世界糖尿病日',
  '1115': '泰国大象节',
  '1117': '国际大学生节 世界学生节 世界戒烟日',
  '1120': '世界儿童日',
  '1121': '世界问候日 世界电视日',
  '1129': '国际声援巴勒斯坦人民国际日',
  '1201': '世界艾滋病日',
  '1202': '废除一切形式奴役世界日',
  '1203': '世界残疾人日',
  '1204': '全国法制宣传日',
  '1205': '国际经济和社会发展志愿人员日 世界弱能人士日',
  '1207': '国际民航日',
  '1208': '国际儿童电视日',
  '1209': '世界足球日 一二·九运动纪念日',
  '1210': '世界人权日',
  '1211': '世界防止哮喘日',
  '1212': '西安事变纪念日',
  '1213': '南京大屠杀纪念日',
  '1214': '国际儿童广播电视节',
  '1215': '世界强化免疫日',
  '1220': '澳门回归纪念',
  '1221': '国际篮球日',
  '1224': '平安夜',
  '1225': '圣诞节',
  '1226': '毛泽东诞辰纪念日',
  '1229': '国际生物多样性日'
}; //农历的节日

var lFtv = {
  '0101': '春节',
  '0115': '元宵节',
  '0505': '端午节',
  '0707': '七夕情人节',
  '0715': '中元节',
  '0815': '中秋节',
  '0909': '重阳节',
  '1208': '腊八节',
  '1223': '小年',
  '0100': '除夕'
}; //某月的第几个周，的节日

var wFtv = {
  '0150': '世界麻风日',
  //一月的最后一个星期日（月倒数第一个星期日）
  '0351': '全国中小学生安全教育日',
  '0453': '秘书节',
  '0512': '国世界哮喘日',
  '0520': '母亲节',
  '0530': '全国助残日',
  '0532': '国际牛奶日',
  '0626': '中国文化遗产日',
  '0630': '父亲节',
  '0716': '国际合作节',
  '0730': '被奴役国家周',
  '0932': '国际和平日',
  '0936': '全民国防教育日',
  '0940': '国际聋人节 世界儿童日',
  '0950': '世界海事日 世界心脏病日',
  '1011': '国际住房日 世界建筑日 世界人居日',
  '1023': '国际减轻自然灾害日(减灾日)',
  '1024': '世界视觉日',
  '1144': '感恩节',
  '1220': '国际儿童电视广播日'
}; // 当天的一些信息

var _todayStr = _dateFormat({
  format: 'yyyy/mm/dd'
});

var _todayNum = new Date(_todayStr).getTime(); // 日期的一些简单工具


var _utils = {
  //返回农历 y年的总天数
  lYearDays: function lYearDays(y) {
    var i = 0x8000;
    var sum = 348;

    for (i; i > 0x8; i >>= 1) {
      sum += tInfo[y - 1900] & i ? 1 : 0;
    }

    return sum + _utils.leapDays(y);
  },
  //返回农历 y年闰月的天数
  leapDays: function leapDays(y) {
    if (_utils.leapMonth(y)) {
      return tInfo[y - 1900] & 0x10000 ? 30 : 29;
    } else {
      return 0;
    }
  },
  //返回农历 y年闰哪个月 1-12 , 没闰返回 0
  leapMonth: function leapMonth(y) {
    return tInfo[y - 1900] & 0xf;
  },
  //返回农历 y年m月的总天数
  monthDays: function monthDays(y, m) {
    return tInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },
  //某年的第n个节气为几日(从0小寒起算)
  sTerm: function sTerm(y, n) {
    var offDate = null;

    if (y === 2009 && n === 2) {
      sTermInfo[n] = 43467;
    }

    offDate = new Date(31556925974.7 * (y - 1900) + sTermInfo[n] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
    return offDate.getUTCDate();
  },
  //返回该年的复活节(春分后第一次满月周后的第一主日)
  easter: function easter(y) {
    //取得春分日期
    var term2 = _utils.sTerm(y, 5); //取得春分的公历日期控件(春分一定出现在3月)


    var dayTerm2 = new Date(Date.UTC(y, 2, term2, 0, 0, 0, 0)); //取得取得春分农历

    var lDayTerm2 = _utils.lunar(dayTerm2); //下个月圆的相差天数


    var lMlen = 0;
    var l15 = 0; //复活节对应的时间对象

    var dayEaster = null;

    if (lDayTerm2.day - 15 < 0) {
      lMlen = 15 - lDayTerm2.day;
    } else {
      lMlen = (lDayTerm2.isLeap ? _utils.leapDays(y) : _utils.monthDays(y, lDayTerm2.month)) - lDayTerm2.day + 15;
    } //一天等于 1000*60*60*24 = 86400000 毫秒


    l15 = new Date(dayTerm2.getTime() + 86400000 * lMlen); //求出第一次月圆为公历几日

    dayEaster = new Date(l15.getTime() + 86400000 * (7 - l15.getUTCDay())); //求出下个周日

    return {
      m: dayEaster.getUTCMonth(),
      d: dayEaster.getUTCDate()
    };
  },
  //算出农历, 传入日期控件, 返回农历日期控件
  //该控件属性有 .year .month .day .isLeap
  lunar: function lunar(objDate) {
    var i = 1900;
    var temp = 0;
    var lunar = {};
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;

    for (i; i < 2150 && offset > 0; i++) {
      temp = _utils.lYearDays(i);
      offset -= temp;
    }

    if (offset < 0) {
      offset += temp;
      i--;
    }

    lunar.year = i;
    lunar.leap = _utils.leapMonth(i); //闰哪个月

    lunar.isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (lunar.leap > 0 && i === lunar.leap + 1 && lunar.isLeap === false) {
        --i;
        lunar.isLeap = true;
        temp = _utils.leapDays(lunar.year);
      } else {
        temp = _utils.monthDays(lunar.year, i);
      } //解除闰月


      if (lunar.isLeap === true && i === lunar.leap + 1) {
        lunar.isLeap = false;
      }

      offset -= temp;
    }

    if (offset === 0 && lunar.leap > 0 && i === lunar.leap + 1) {
      if (lunar.isLeap) {
        lunar.isLeap = false;
      } else {
        lunar.isLeap = true;
        --i;
      }
    }

    if (offset < 0) {
      offset += temp;
      --i;
    }

    lunar.month = i;
    lunar.day = offset + 1;
    return lunar;
  },
  //获取公历的日期等,包括
  getDate: function getDate(date, dateObj) {
    var secs = 86400000; // 获取公历的日期

    dateObj.solar = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay()
    }; //判断是否为今天

    if (_todayStr === _dateFormat({
      date: date,
      format: 'yyyy/mm/dd'
    })) {
      dateObj.isToday = true;
      dateObj.distanceToday = 0;
    } else {
      dateObj.isToday = false;
      dateObj.distanceToday = Math.floor((date.getTime() - _todayNum) / secs);
    }
  },
  //添加节气
  solarTerms: function solarTerms(dateObj) {
    var solar = dateObj.solar;
    var y = solar.year;
    var m = solar.month - 1;
    var d = solar.day;

    var v = _utils.sTerm(y, m * 2);

    if (v === d) {
      dateObj.solarTerms = solarTerm[m * 2];
      return;
    }

    v = _utils.sTerm(y, m * 2 + 1);

    if (v === d) {
      dateObj.solarTerms = solarTerm[m * 2 + 1];
    } else {
      dateObj.solarTerms = '';
    }
  },
  //复活节
  addEstDay: function addEstDay(dateObj) {
    var solar = dateObj.solar;
    var y = solar.year;
    var m = solar.month - 1;
    var d = solar.day;
    var estDay = null;

    if (m !== 2 && m !== 3) {
      return;
    } //复活节只出现在3或4月


    estDay = _utils.easter(y);

    if (m === estDay.m && d === estDay.d) {
      dateObj.festival.estDay = '复活节';
    }
  },
  // 根据日期，活动是该月的第几周
  getWeekNumber: function getWeekNumber(solar) {
    var y = solar.year;
    var m = solar.month;

    var _sw = new Date("".concat(y, "/").concat(m, "/1")).getDay();

    var _d = solar.day - (7 - _sw);

    var _rw = 1;

    while (_d >= 7) {
      _rw++;
      _d -= 7;
    }

    return _rw;
  },
  //添加周节日
  weekFestival: function weekFestival(dateObj) {
    var solar = dateObj.solar;

    var m = _tf(solar.month);

    var w = solar.week;

    var weekNum = _utils.getWeekNumber(solar);

    var key = "".concat(m).concat(weekNum).concat(w); // 周节日

    dateObj.festival.week = wFtv[key] || '';
  },
  //添加公历节日
  solarFestival: function solarFestival(dateObj) {
    var solar = dateObj.solar;

    var day = _tf(solar.month) + _tf(solar.day); // 公历节日


    dateObj.festival.solar = sFtv[day] || '';
  },
  //添加农历节日的
  lunarFestival: function lunarFestival(dateObj) {
    var lunar = dateObj.lunar;

    var day = _tf(lunar.month) + _tf(lunar.day); // 农历节日


    dateObj.festival.lunar = lFtv[day] || '';
  }
};

function _dateNature(date) {
  var _date = _toDate(date);

  var _dateObj = {
    festival: {}
  }; // 如果返回的不是一个日期对象，则直接抛出异常

  if (!_isDate(_date)) {
    throw new TypeError('在调用fdutils.dateNature时，传入的参数不是一个合法的Date实例！', date);
  } //获取农历的日期，并返回一个对象


  _dateObj.lunar = _utils.lunar(_date); //获取公历的日期，并添加到传入的对象中去。

  _utils.getDate(_date, _dateObj); //添加节气


  _utils.solarTerms(_dateObj); //添加复活节


  _utils.addEstDay(_dateObj); //添加公历节日


  _utils.solarFestival(_dateObj); //添加周纪念日


  _utils.weekFestival(_dateObj); //添加农历的节日


  _utils.lunarFestival(_dateObj);

  return _dateObj;
} // 简介信息；


_dateNature.info = {
  input: function input() {
    return 'fdutils.dateNature("2019/04/27")';
  },
  output: function output() {
    return {
      festival: {
        solar: '公历节日',
        week: '周节日',
        lunar: '农历节日'
      },
      lunar: {
        year: '农历 年',
        month: '农历 月',
        day: '农历 日',
        leap: '今年闰月是几月',
        isLeap: '今年是否为闰年'
      },
      solar: {
        year: '阳历 年',
        month: '阳历 月',
        day: '阳历 日',
        week: '阳历 周'
      },
      isToday: '是否为当天',
      distanceToday: '距离今天还有几天时间',
      solarTerms: '节气'
    };
  }
};
module.exports = _dateNature;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @method preciseCountDownTimer
 * @since version 1.0.0
 * @desc 倒计时的插件
 * @param {Number} options.distTime 倒计时截止时间，有效的时间（时间戳，时间字符串，Date实例）
 * @param {Number} options.curTime 当前时间，其实也是服务器时间（时间戳，时间字符串，Date实例）
 * @param {Function} options.callback 倒计时之后的回调函数（必须）
 * @return Object ;
 *
 * @example fdutils.preciseCountDownTimer({
 *		distTime : "13131",
 * 		curTime : 3,
 *      callback : Function(data)
 * });
 * @result Object.clear()
 * 
 * callback传入参数，对象
 * {
 *   "day":"07",        // 距离倒计时结束，剩余的 天数
 *   "hour":"08",       // 距离倒计时结束，剩余的 小时
 *   "min":18,          // 距离倒计时结束，剩余的 分钟
 *   "secs":57,         // 距离倒计时结束，剩余的 秒数
 *   "msecs":634737985  // 距离倒计时结束，剩余的 毫秒
 *   "arr": ["07","08","18","57"] // 倒计时计算成 天、时、分、秒的数组，长度为4
 * }
 * @author zhangyunling 
 */
var _dateUtils = __webpack_require__(2);

var isFunction = __webpack_require__(10); // 把传入的值，尝试转换为日期对象；


var _toDate = _dateUtils.toDate; // 格式化毫秒

var _trimResult = _dateUtils.trimCountDownSecs; // 倒计时主函数

function _preciseCountDownTimer(options) {
  // 传入的options，必须是一个对象；
  if (!options || _typeof(options) !== 'object') {
    throw new TypeError('调用preciseCountDownTimer时，传入的参数有误！');
  } // 必须有回调函数


  if (!isFunction(options.callback)) {
    throw new TypeError('preciseCountDownTimer必须要有一个callback的回调函数');
  }

  var _distSecs = _toDate(options.distTime).getTime(); // 目标截止时间的时间戳；


  var _curSecs = _toDate(options.curTime).getTime(); // 当前时间的时间戳；


  var _callback = options.callback; // 回调函数

  var _timestamp = Date.now();

  var _secsBw = _timestamp + _distSecs - _curSecs; // 离目标节点的时间差；


  var _timer = 0; // 倒计时的计时器
  // 倒计时模块

  var _countdown = function _countdown() {
    var _tt = Date.now();

    var _secs = _secsBw - _tt;

    var _delay = 0;

    if (_secs <= 0) {
      _callback(_trimResult(0));

      return;
    }

    _callback(_trimResult(_secs)); // 纠正误差，尽量做到每秒钟在变化；


    if (_tt - _timestamp > 500) {
      _delay = 2000 - _tt + _timestamp;
    } else {
      _delay = 1000 - _tt + _timestamp;
    }

    _timer = setTimeout(_countdown, _delay);
    _timestamp = _tt;
  };

  _countdown();

  return {
    clear: function clear() {
      clearTimeout(_timer);
    }
  };
}

module.exports = _preciseCountDownTimer;

/***/ })
/******/ ]);