/**
 * @method objToStr
 * @since version 1.0.0
 * @desc 把规定格式的Object转换为String格式
 * @params {Object} obj 待转换的对象
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回对象转换后的字符串；
 *
 * @example feutils.objToStr({a: 1, b: 2});
 * @return 'a=1&b=2'
 *
 */

import { DefaultObjectTypes } from '../../types/index';

export function objToStr (obj: DefaultObjectTypes = {}, sep: string = '&'): string {
  const _arr: Array<string> = [];
  let key: string = '';

  // 使用最基本的，无兼容性的实现方案
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      _arr.push(`${key}=${encodeURIComponent(String(obj[key]))}`);
    }
  }

  return _arr.join(sep);
}
