/**
 * @method rgbToHex
 * @since version 1.0.0
 * @desc 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
 * @param 
 * @return {String} 返回生成的hex或者hex8格式的颜色值
 *
 * @example fdutils.rgbToHex('rgb(0,0,0)');
 * @result {String} '#000000'
 *
 */

// 把数字变成两位的16进制
let xToOX = function(num){
	let _num = num.toString(16);
	
	return _num.length === 1 ? `0${_num}`: _num;
};

// 判断数字的范围，rgba的范围在 [0, 255]区间
let _trimRgbNum = function(num) {
	// 判断数字的范围
	if (num < 0 || num > 255){
		throw new TypeError('fdutils.rgbToHex参数不合法，小于 0 或者大于 255，请检查');
	}

	return num;
};

function _rgbToHex(rgb) {
	let _rgb = String(rgb).replace(/\s+/g,'');
	let _lIndex = _rgb.indexOf('(');
	let _rIndex = _rgb.indexOf(')');

	// 如果不是一个rgb或者rgba开头的，则直接抛错
	if (_rgb.indexOf('rgba(') !== 0 && _rgb.indexOf('rgb(') !== 0) {
		throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
	}

	// 如果找不到_lIndex，_rIndex，或者这两个的位置不正确，则表示错误
	if (_lIndex === -1 || _rIndex === -1 || _lIndex >= _rIndex){
		throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
	}

	// 截断字符串，剩余1,1,1,1的格式；
	_rgb = _rgb.substring(_lIndex+1, _rIndex);

	let _rgbArr = _rgb.split(',');
	let _len = _rgbArr.length;

	// 判断格式是否正确
	if ((_len !== 3 && _len !== 4) || !(/[\d,]+/g).test(_rgb)){
		throw new TypeError('fdutils.rgbToHex传入的参数格式不正确，请检查');
	}

	let _r = xToOX(_trimRgbNum(Number(_rgbArr[0] || '')));
	let _g = xToOX(_trimRgbNum(Number(_rgbArr[1] || '')));
	let _b = xToOX(_trimRgbNum(Number(_rgbArr[2] || '')));
	let _a = _rgbArr[3] || '';

	// 如果是3位数
	if (_len === 3) {
		return `#${_r}${_g}${_b}`;
	} else {
		_a = xToOX(_trimRgbNum(Math.round((!isNaN(_a) ? _a : 1)*255)));
		return `#${_r}${_g}${_b}${_a}`;
	}
}

module.exports = _rgbToHex;