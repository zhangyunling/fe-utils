/**
 * @method isBoolean
 * @since version 1.0
 * @desc 判断是否为布尔值类型
 * @param {Boolean} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example FEUtils.isBoolean(value);
 */

let checkType = require('../_utils/_type');

function isBoolean(value){
	return checkType(value) === 'boolean';
}
module.exports = isBoolean;