/**
 * @method xssTrim
 * @method xssTrim.encode xss的编码
 * @method xssTrim.decode xss的解码
 *
 */
    
var xssTrim = {};
let checkType = require('../_utils/_type');

// xss的编码
xssTrim.encode = function (str){
  let _str = str;

  // 如果为非字符串格式，转换为字符串
  if (checkType(_str) !== 'string') {
    _str = String(_str);
  }

  // 如果字符串为空，则直接返回
  if (!_str){
    return _str;
  }

  return _str.replace(/&/g, '&amp;').
    replace(/</g, '&lt;').
    replace(/"/g, '&quot;').
    replace(/'/g, '&#39;').
    replace(/\s/g, '&nbsp;');
};

// xss解码
xssTrim.decode = function (str){
  let _str = str;

  // 如果为非字符串格式，转换为字符串
  if (checkType(_str) !== 'string') {
    _str = String(_str);
  }

  // 如果字符串为空，则直接返回
  if (!_str){
    return _str;
  }

  return _str.replace(/&amp;?/g, '&').
    replace(/&lt;?/g, '<').
    replace(/&quot;?/g,'"').
    replace(/&#39;?/g, '\'').
    replace(/&nbsp;?/g, ' ');
};

module.exports = xssTrim;
