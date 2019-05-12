/**
 * @method stringToObject
 * @since version 1.0.0
 * @desc 把规定格式的Str转换为Object格式
 * @params {String} str 待转换的字符串
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回编码转换的字符串
 *
 * @example FEUtils.stringToObject('a=1&b=2');
 * @return {a: 1, b: 2}
 *
 */

// 常用的转换格式变化
let _conversion = {
	'undefined': undefined,
	'null': null,
	'false': false,
	'true': true
}

function _stringToObject(str, sep){
	let _sep = String(sep || '&');
	let _str = String(str);
	let _obj = {};

	// 循环拆分
	_str.split(_sep).forEach(item => {
		let _arr = item.split('=');
		let _key = _arr[0];
		let _value = _arr[1];

		// 如果长度为空，那么直接不做任何处理；
		if (_arr.length === 0){
			return;
		}

		// 如果格式不对，则抛弃这部分；
		if (_arr.length > 2 || !_key) {
			throw new Error('解析FEUtils.stringToObject时，传入的参数有误，请确认', str);
		}

		// 如果对应的值为undefined，那么依然设置为undefined
		// 如果对应的值为null，设置为null
		// false字符串被转成 ： false
		// true字符串被转成：true
		if (_conversion.hasOwnProperty(_value)) {
			_value = _conversion[_value];
		} else if (_value === undefined) {
			// 如果该部分只设置了key，没有设置值，就直接处理成
			// 这个时候，不做任何处理
		} else if (!isNaN(_value)) {
			// 如果数字长度，超过15位，那么就不做转换；
			// 或者以0开头的，就还是按照字符串处理；
			_value = (_value.length > 15 || _value.indexOf('0') === 0) ? _value : Number(_value);
		} else {
			_value = decodeURIComponent(_value);
		}

		_obj[_key] = _value;
	});

  return _obj;
}

module.exports = _stringToObject;
