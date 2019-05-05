/**
 * @method rgbToHex
 * @since version 1.0
 * @desc 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
 * @param 
 * @return {String} 返回生成的hex或者hex8格式的颜色值
 *
 * @example FEUtils.rgbToHex('rgb(0,0,0)');
 * @result {String} '#000000'
 *
 */

// 把数字变成两位的16进制
let xToOX = function(num){
	let _num = num.toString(16);
	
	return _num.length === 1 ? `0${_num}`: _num;
};

function _rgbToHex(rgb) {
	let _rgb = String(rgb).replace(/\s+/g,'');
	let _lIndex = _rgb.indexOf('(');
	let _rIndex = _rgb.indexOf(')');

	// 如果找不到_lIndex，_rIndex，或者这两个的位置不正确，则表示错误
	if (_lIndex === -1 || _rIndex === -1 || _lIndex >= _rIndex){
		throw new TypeError('FEUtils.rgbToHex传入的参数格式不正确，请检查');
	}

	// 截断字符串，剩余1,1,1,1的格式；
	_rgb = _rgb.substring(_lIndex+1, _rIndex);

	let _rgbArr = _rgb.split(',');
	let _len = _rgbArr.length;

	// 判断格式是否正确
	if ((_len !== 3 && _len !== 4) || !(/[\d,]+/g).test(_rgb)){
		throw new TypeError('FEUtils.rgbToHex传入的参数格式不正确，请检查');
	}

	let _r = xToOX(Number(_rgbArr[0] || ''));
	let _g = xToOX(Number(_rgbArr[1] || ''));
	let _b = xToOX(Number(_rgbArr[2] || ''));
	let _a = _rgbArr[3] || '';

	// 如果是3位数
	if (_len === 3) {
		return `#${_r}${_g}${_b}`;
	} else {
		_a = xToOX(Math.round((!isNaN(_a) ? _a : 1)*255));
		return `#${_r}${_g}${_b}${_a}`;
	}
}

module.exports = _rgbToHex;