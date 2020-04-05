/**
 * @method numberFormat
 * @since version 1.0.0
 * @desc 把数字字符串进行分割，支持字符串类型的数字
 * @props {String/Number} number 待转换的数字，必须是整数，不能是浮点型
 * @props {Number} length 每一个小单元的长度，默认值为 3
 * @props {String} sep 分隔符，默认值为“,”
 * @return {String} 使用分隔符，分割好的数字字符串；
 *
 * @example feutils.numberFormat({
 *      number : 1234567,
 *      length : 3,
 *      sep : '-',
 * });
 * @result {String} "1-234-567"
 *
 */

import { isObject } from '../boolean/type';
import { NumberFormatTypes } from '../../types/index';

// 获取前置符号
const _getPositiveFlag = function (str: string): string {
  if (str.indexOf('-') === 0) {
    return '-';
  }
  if (str.indexOf('+') === 0) {
    return '+';
  }

  return '';
}

export function numberFormat (options: NumberFormatTypes): string {
  if (!isObject(options)) {
    throw new Error('numberFormat入参有误！');
  }

  let _number = String(options.number);
  const _len: number = options.length || 3;
  const _sep: string = String(options.sep || '') || ',';
  const _resultArr: Array<string> = [];
  const numberStringReg: RegExp = /^\d+$/g;
  const clearFirstZeroReg: RegExp = /^[+-]?0*/g;

  // 如果是0，则直接返回
  if (_number === '0' || _number === '-0' || _number === '+0') {
    return _number;
  }

  const _positiveFlag: string = _getPositiveFlag(_number);
  _number = _number.replace(clearFirstZeroReg, '');

  // 判断是否为合法的数字字符串；
  if (!numberStringReg.test(_number)) {
    throw new Error('numberFormat传入的number不是一个有效的整数！');
  }
  let _curLen: number = _number.length;

  // 如果长度短，可以直接返回
  if (_curLen <= _len) {
    return _positiveFlag + _number;
  }

  // 循环获取
  while (_curLen > _len) {
    _resultArr.unshift(_number.substr(_curLen - _len, _len));
    _curLen = _curLen - _len;
  }
  _resultArr.unshift(_number.substr(0, _curLen));

  return _positiveFlag + _resultArr.join(_sep);
}
