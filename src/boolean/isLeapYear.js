/**
 * @method isLeapYear
 * @since version 1.0.0
 * @desc 判断是否为闰年
 * @param {Number} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isLeapYear(value);
 */

function _isLeapYear(year) {
  if ((year % 4) === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false;
}

module.exports = _isLeapYear;