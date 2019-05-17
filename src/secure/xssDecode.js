/**
 * @method xssDecode
 * @since version 1.0.0
 * @desc 进行XSS解码，与xssEncode配合使用
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example fdutils.xssEncode(string);
 *
 */

let _xssTrim = require('../_utils/_xssTrim');

function _xssDecode(str){
  return _xssTrim.decode(str);
}

module.exports = _xssDecode;
