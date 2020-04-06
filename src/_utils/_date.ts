// 关于Date的快捷操作
import { numberPatchZero as _tf } from './_number';
import { isDate, isNumber, isString } from '../boolean/type';
import { TrimSecsTypes } from '../../types/index';

// 把传入的对象，转换为一个有效的时间对象，并返回该时间对象
// 如果无法正常解析成date对象，则直接抛错；
export function toDate (date: any): Date {
  let _str: string = '';
  let _date: any = null;

  // 如果没有传入值，则直接返回当前时间；
  if (!date) {
    return new Date();
  }

  // 如果是日期对象
  if (isDate(date)) {
    return date;
  } else if (isNumber(date)) {
    // 如果是传入的是数字，判断是否为合法的数字；
    _str = date.toString(10);

    if (_str.length === 13) {
      // 毫秒
      return new Date(date);
    } else if (_str.length === 10) {
      // 秒
      return new Date(date * 1000);
    }

    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
  } else if (isString(date)) {
    // 如果是字符串，判断是否为合法的类似于时间的字符串；
    _date = date.replace(/[^\d\s:]+/g, '/');
  }

  _date = new Date(_date);

  if (isNaN(_date.getDate())) {
    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
  }

  return _date;
}

// 根据毫秒数，转换成一个对象，目前只想到用于倒计时
export function trimCountDownSecs (secs: number): TrimSecsTypes {
  const arr: Array<string> = [];
  let _secs: number = Math.floor(secs / 1000);
  const data: TrimSecsTypes = {
    // 剩余毫秒数
    msecs: secs,
    // 剩余秒数
    secs: _secs,
    // 剩余分钟
    min: Math.floor(_secs / 60),
    // 剩余小时
    hour: Math.floor(_secs / 3600),
    // 剩余天数
    day: Math.floor(_secs / (3600 * 24)),
    // 剩余天数数据
    arr: arr
  };

  // 天
  arr.push(_tf(data.day));

  // 小时
  _secs = _secs % (3600 * 24);
  arr.push(_tf(Math.floor(_secs / 3600)));

  // 分
  _secs = _secs % 3600;
  arr.push(_tf(Math.floor(_secs / 60)));

  // 秒
  arr.push(_tf(Math.floor(_secs % 60)));

  return data;
}
