/**
 * @method strToObj
 * @since version 1.0.0
 * @desc 把规定格式的Str转换为Object格式
 * @params {String} str 待转换的字符串
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回编码转换的字符串
 *
 * @example feutils.strToObj('a=1&b=2');
 * @return {a: 1, b: 2}
 *
 */

import { DefaultObjectTypes } from '../../types/index';

// 常用的转换格式变化
const _conversion: DefaultObjectTypes = {
  'undefined': undefined,
  'null': null,
  'false': false,
  'true': true
}

export function strToObj (str: string = '', sep: string = '&'): DefaultObjectTypes {
  const _obj: DefaultObjectTypes = {};

  // 若为空字符串，则直接返回一个空对象；
  if (!str) {
    return _obj;
  }

  // 循环拆分
  str.split(sep).forEach(item => {
    const _arr: Array<string> = item.split('=');
    const _key: string = _arr[0] || '';
    let _value: string = _arr[1] || 'undefined';

    if (!_key || _arr.length > 2) {
      throw new Error('您输入的格式不正确，请确认：' + str);
    }

    // 如果对应的值为undefined，那么依然设置为undefined
    // 如果对应的值为null，设置为null
    // false字符串被转成 ： false
    // true字符串被转成：true
    if (Object.prototype.hasOwnProperty.call(_conversion, _value)) {
      _value = _conversion[_value];
    } else {
      _value = decodeURIComponent(_value);
    }

    _obj[_key] = _value;
  });

  return _obj;
}
