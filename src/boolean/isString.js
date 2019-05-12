/**
 * @method isString
 * @since version 1.0.0
 * @desc 判断是否为字符串类型
 * @param {String} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isString(value);
 */

let checkType = require('../_utils/_type');

function isString(value){
	return checkType(value) === 'string';
}
module.exports = isString;