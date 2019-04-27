/**
 * @method isObject
 * @since version 1.0
 * @desc 判断是否为对象类型
 * @param {Object} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example FEUtils.isObject(value);
 */

let checkType = require('../_utils/_type');

function isObject(value){
	return checkType(value) === 'object';
}
module.exports = isObject;