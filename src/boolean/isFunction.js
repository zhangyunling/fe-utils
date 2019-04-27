/**
 * @method isFunction
 * @since version 1.0
 * @desc 判断是否为数字类型
 * @param {Function} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example FEUtils.isFunction(value);
 */

let checkType = require('../_utils/_type');

function isFunction(value){
	return checkType(value) === 'function';
}
module.exports = isFunction;