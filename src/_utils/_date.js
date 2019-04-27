// 关于Date的快捷操作
let _dateUtils = {};

// 把传入的对象，转换为一个有效的时间对象，并返回该时间对象
// 如果无法正常解析成date对象，则直接抛错；
function _toDate(date){
  let _type = typeof date;
  let _str = '';
  let _date = null;

  // 如果没有传入值，则直接返回当前时间；
  if (!date){
    return new Date();
  }

  // 如果是日期对象
  if (date instanceof Date) {
    return date;
  } else if (_type === 'number') {
    // 如果是传入的是数字，判断是否为合法的数字；
    _str = date.toString();

    if (_str.length === 13) {
      // 毫秒
      return new Date(date);
    } else if (_str.length === 10) {
      // 秒
      return new Date(date * 1000);
    }

    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date='+date);
  } else if (_type === 'string') {
    // 如果是字符串，判断是否为合法的类似于时间的字符串；
    _date = date.replace(/[^\d\s:]+/g, '/');
  }

  _date = new Date(_date);

  if (isNaN(_date.getDate())) {
    throw new Error('toDate转换为时间对象时出错，请检查您的输入，date='+date);
  }

  return _date;
}

_dateUtils.toDate = _toDate;

module.exports = _dateUtils;