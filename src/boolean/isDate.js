/**
 * @method isDate
 * @since version 1.0.0
 * @desc 判断是否为Date类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example FEUtils.isDate(value);
 */

let checkType = require('../_utils/_type');

function isDate(value){
	return checkType(value) === 'date';
}
module.exports = isDate;