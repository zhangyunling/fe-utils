// 数字相关的一些操作；
let _numberUtils = {};
let checkType = require('../_utils/_type');
let isNumber = function(value){
	return checkType(value) === 'number';
}

// 个位数补零，变成两位的字符串；
function _numberPatchZero(num){
	// 如果不是Number类型，直接返回；
	if (!isNumber(num)){
		return num;
	}

	// 如果是NaN，则返回NaN的字符串
	if (isNaN(num)) {
		return String(num);
	}

	// 如果是个位数，则直接给个位数补0；
	return (num < 10 ? '0' : '') + num;
}
_numberUtils.numberPatchZero = _numberPatchZero;

module.exports = _numberUtils;