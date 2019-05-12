/**
 * @method isNumber
 * @since version 1.0.0
 * @desc 判断是否为数字类型
 * @param {Number} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example feutils.isNumber(value);
 */

let checkType = require('../_utils/_type');

function isNumber(value){
	return checkType(value) === 'number';
}
module.exports = isNumber;