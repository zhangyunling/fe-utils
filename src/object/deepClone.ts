/**
 * @method deepClone
 * @since version 1.0.0
 * @desc 深copy，如果不是对象，则直接返回
 * @param {Any} values 待copy的数据
 * @return {Any} copy之后的值
 *
 * @example feutils.deepClone({
 *      number : 1234567,
 * });
 * @result {Object} {
 *      number : 1234567,
 * }
 *
 */

import {
  isObject,
  isArray,
  isDate
} from '../boolean/type';
import { DefaultObjectTypes } from '../../types/index';

const _cloneFn = function (value: any): any {
  let _clone: any = '';

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
  if (value && isArray(value)) {
    return _cloneArray(value);
  }

  // 如果是一个正常的对象；
  if (value && isObject(value)) {
    return _cloneObject(value);
  }

  // 直接返回
  return value;
};
// clone 数组
const _cloneArray = function (value: any = []): Array<any> {
  const _clone: Array<any> = [];
  let i: number = 0;
  const len: number = value.length;

  for (i; i < len; i++) {
    _clone.push(_cloneFn(value[i]));
  }

  return _clone;
};
// clone 对象
const _cloneObject = function (value: any = {}): DefaultObjectTypes {
  const _clone: DefaultObjectTypes = {};
  let attr: string = '';

  for (attr in value) {
    if (Object.prototype.hasOwnProperty.call(value, attr)) {
      _clone[attr] = _cloneFn(value[attr]);
    }
  }

  return _clone;
};

export function deepClone (obj: any): any {
  // 如果当前数据是一个数组时
  if (obj && isArray(obj)) {
    return _cloneArray(obj);
  }

  // 如果是一个正常的对象；
  if (obj && isObject(obj)) {
    return _cloneObject(obj);
  }

  // 传入的参数，只能是对象或者数组；
  throw new Error('deepClone传入参数格式不正确，请传入对象，数组格式');
}
