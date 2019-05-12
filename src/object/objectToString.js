/**
 * @method objectToString
 * @since version 1.0.0
 * @desc 把规定格式的Object转换为String格式
 * @params {Object} obj 待转换的对象
 * @params {String} sep 字符串分隔符，默认为："&"
 * @return {Object} 返回对象转换后的字符串；
 *
 * @example fdutils.objectToString({a: 1, b: 2});
 * @return 'a=1&b=2'
 *
 */

let isObject = require('../boolean/isObject');

function _objectToString(obj, sep){
	let _sep = String(sep || '&');
	let _obj = obj;
	let _arr = [];

	// 是否为对象，如果不是对象，那么直接抛错
	if (!_obj && !isObject(_obj)) {
		throw new Error('解析fdutils.objectToString时，传入的参数非对象格式，请确认', _obj);
	}

	// 循环拆分
	for (let [key, value] of Object.entries(_obj)){
		if (value instanceof Object){
			throw new Error('解析fdutils.objectToString时，传入的参数不支持多层对象嵌套，请确认', value);
		}

		_arr.push(`${key}=${encodeURIComponent(String(value))}`);
	}

  return _arr.join(_sep);
}

module.exports = _objectToString;
