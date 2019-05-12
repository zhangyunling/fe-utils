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

let isObject = require('../boolean/isObject');
let isArray = require('../boolean/isArray');
let isDate = require('../boolean/isDate');

function _deepClone(value) {
  let _clone;
  
  // 如果是非对象，并且等于null时，直接返回；
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 如果是当前数据是一个日期对象时
  if (isDate(value)) {
    _clone = new Date(value.getTime());
    return _clone;
  }

  // 如果当前数据是一个数组时
  if (isArray(value)) {
    let i = 0;
    let len = value.length;

    _clone = [];

    for (i; i < len; i++) {
      _clone[i] = _deepClone(value[i]);
    }
    return _clone;
  }

  // 如果是一个正常的对象；
  if (isObject(value)) {
    let attr = '';

    _clone = {}
    for (attr in value) {
      if (value.hasOwnProperty(attr)) {
        _clone[attr] = _deepClone(value[attr]);
      }
    }

    return _clone;
  }
  
  // 如果执行到这里，表示：为对象模式，但是却不是：Date，Array，Object；
  // 有可能是Function等，此时直接返回原值；
  return value;
}

module.exports = _deepClone;