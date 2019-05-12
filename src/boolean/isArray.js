/**
 * @method isArray
 * @since version 1.0.0
 * @desc 判断是否为数组类型
 * @param {Array} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isArray(value);
 */

let checkType = require('../_utils/_type');

function isArray(value){
	return checkType(value) === 'array';
}
module.exports = isArray;