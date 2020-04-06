/**
 * @method dateFormat
 * @since version 1.0.0
 * @desc 转换为指定格式的时间
 * @props {String} format 转换成的目标格式，默认值为:"yyyy/mm/dd hh:ii"
 * @props {Number/String/Date} date   输入的时间戳，或者待转换的时间，不传该属性是，取当前的时间戳
 * @return {String} 返回转换好的指定的日期时间的字符串
 *
 * @example feutils.dateFormat({
 *    format : "yyyy-mm-dd hh时ii分ss秒",
 *     date : "2019/04/27 16:24:12"
 * });
 * @result {String} "2019-04-27 16时24分12秒"
 *
 */

import { toDate } from '../_utils/_date';
import { numberPatchZero as _tf } from '../_utils/_number';
import { DateFormatTypes, DefaultFunctionTypes } from '../../types/index';

// 正则替换
const _proxy: DefaultFunctionTypes = {
  'yyyy': function (date: Date): number {
    return date.getFullYear();
  },
  'mm': function (date: Date): string {
    return _tf(date.getMonth() + 1);
  },
  'dd': function (date: Date): string {
    return _tf(date.getDate());
  },
  'hh': function (date: Date): string {
    return _tf(date.getHours());
  },
  'ii': function (date: Date): string {
    return _tf(date.getMinutes());
  },
  'ss': function (date: Date): string {
    return _tf(date.getSeconds());
  }
};

export function dateFormat (options: DateFormatTypes = {}): string {
  const format: string = options.format || 'yyyy/mm/dd hh:ii';
  const date: Date = toDate(options.date);

  return format.replace(/yyyy|mm|dd|hh|ii|ss/g, function (key: string): any {
    return _proxy[key](date);
  });
}
