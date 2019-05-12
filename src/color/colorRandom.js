/**
 * @method colorRandom
 * @since version 1.0.0
 * @desc 生成一个随机的颜色
 * @return {String} 一个随机的HEX格式的颜色
 *
 * @example feutils.colorRandom();
 * @result {String} '#000000'
 *
 */
function _colorRandom() {
	return '#'+Math.floor(Math.random()*0xffffff).toString(16);
}

module.exports = _colorRandom;