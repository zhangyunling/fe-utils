/**
 * @method isRegExp
 * @since version 1.0.0
 * @desc 判断是否为正则类型
 * @param {RegExp} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isRegExp(value);
 */

let checkType = require('../_utils/_type');

function isRegExp(value){
	return checkType(value) === 'regexp';
}
module.exports = isRegExp;