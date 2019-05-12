/**
 * @method isError
 * @since version 1.0.0
 * @desc 判断是否为Error对象
 * @param {Error} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isError(value);
 */

let checkType = require('../_utils/_type');

function isError(value){
	return checkType(value) === 'error';
}
module.exports = isError;