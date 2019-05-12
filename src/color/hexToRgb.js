/**
 * @method hexToRgb
 * @since version 1.0.0
 * @desc 根据hex的值，生成rgb格式的值，支持hex8 -> rgba
 * @param 
 * @return {String} 返回生成的rgb或者rgba格式的值
 *
 * @example feutils.hexToRgb('#000000');
 * @result {String} 'rgb(0,0,0)'
 *
 */

function _hexToRgb(hex) {
	let _hex = String(hex);
	let _len = _hex.length;

	// 以 # 号开头
	if (_hex.indexOf('#') !== 0){
		throw new TypeError('feutils.hexToRgb传入的参数格式不正确，请检查');
	}

	// 移除 # 号
  _hex = _hex.substring(1);
  _len = _hex.length;

  // 如果长度为3或者4 ，则进行补全到6或者8
  if (_len === 3 || _len === 4){
  	/// 字符串拼接，性能最佳
  	_hex = _hex[0]+_hex[0]+_hex[1]+_hex[1]+_hex[2]+_hex[2]+(_hex[3] || '')+(_hex[3] || '');
  	_len = _len * 2;
  }

  // 如果长度或者字符格式不对，则抛出错误
  if (_len !== 6 && _len !== 8 && /^[0-9a-fA-F]+$/.test(_hex)) {
  	throw new TypeError('feutils.hexToRgb传入的参数格式不正确，请检查');
  }

  let r = parseInt('0x' + _hex.slice(0, 2), 16);
  let g = parseInt('0x' + _hex.slice(2, 4), 16);
  let b = parseInt('0x' + _hex.slice(4, 6), 16);
  let a = 1;

  // 如果有透明度的设置
  if (_len === 8){
  	a = Math.round(parseInt('0x' + _hex.slice(6, 8), 16)*100/255)/100;
  }
  
  // 根据a的值，分别返回
  if (a === 1) {
  	return `rgb(${r},${g},${b})`;
  } else {
  	return `rgba(${r},${g},${b},${a})`;
  }
}

module.exports = _hexToRgb;