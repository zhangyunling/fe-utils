/**
 * desc 类型判断
 */
import {
  DefaultStringTypes
} from '../../types/index';

// 基本类型映射
const class2type: DefaultStringTypes = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object RegExp]': 'regexp',
  '[object Object]': 'object',
  '[object Error]': 'error',
  '[object Date]': 'date',
};
const _toString: Function = class2type.toString;

function checkType (obj: any): string {
  if (obj === null || obj === undefined) {
    return String(obj);
  }
  const typeStr: string = _toString.call(obj);

  return class2type[typeStr] || 'object';
}

/**
 * @method isString
 * @since version 1.1.0
 * @desc 判断是否为字符串类型
 * @param {any} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isString(value);
 */
export function isString (value: any): boolean {
  return checkType(value) === 'string';
}

/**
 * @method isArray
 * @since version 1.1.0
 * @desc 判断是否为数组类型
 * @param {any} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isArray(value);
 */
export function isArray (value: any): boolean {
  return checkType(value) === 'array';
}

/**
 * @method isBoolean
 * @since version 1.1.0
 * @desc 判断是否为布尔值类型
 * @param {any} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isBoolean(value);
 */
export function isBoolean (value: any): boolean {
  return checkType(value) === 'boolean';
}

/**
 * @method isDate
 * @since version 1.1.0
 * @desc 判断是否为Date类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isDate(value);
 */
export function isDate (value: any): boolean {
  return checkType(value) === 'date';
}

/**
 * @method isError
 * @since version 1.1.0
 * @desc 判断是否为Error对象
 * @param {Error} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isError(value);
 */
export function isError (value: any): boolean {
  return checkType(value) === 'error';
}

/**
 * @method isFunction
 * @since version 1.1.0
 * @desc 判断是否为函数
 * @param {Function} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isFunction(value);
 */
export function isFunction (value: any): boolean {
  return checkType(value) === 'function';
}

/**
 * @method isNumber
 * @since version 1.1.0
 * @desc 判断是否为数字类型
 * @param {Number} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isNumber(value);
 */
export function isNumber (value: any): boolean {
  return checkType(value) === 'number';
}

/**
 * @method isObject
 * @since version 1.1.0
 * @desc 判断是否为对象类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isObject(value);
 */
export function isObject (value: any): boolean {
  return checkType(value) === 'object';
}

/**
 * @method isRegExp
 * @since version 1.1.0
 * @desc 判断是否为正则类型
 * @param {RegExp} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isRegExp(value);
 */
export function isRegExp (value: any): boolean {
  return checkType(value) === 'regexp';
}

export default checkType;
