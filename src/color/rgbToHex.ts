/**
 * @method rgbToHex
 * @since version 1.0.0
 * @desc 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
 * @param
 * @return {String} 返回生成的hex或者hex8格式的颜色值
 *
 * @example feutils.rgbToHex('rgb(0,0,0)');
 * @result {String} '#000000'
 *
 */

// 把数字变成两位的16进制
const xToOX = function (num: number): string {
  const _num: string = num.toString(16);
  return _num.length === 1 ? `0${_num}` : _num;
};

// 判断数字的范围，rgba的范围在 [0, 255]区间
const _trimRgbNum = function (num: number): number {
  // 判断数字的范围
  if (num < 0 || num > 255) {
    throw new TypeError('feutils.rgbToHex参数不合法，小于 0 或者大于 255，请检查');
  }

  return num;
};

export function rgbToHex (rgb: string): string {
  let _rgb: string = String(rgb).replace(/\s+/g, '');
  const _lIndex: number = _rgb.indexOf('(');
  const _rIndex: number = _rgb.indexOf(')');

  // 如果不是一个rgb或者rgba开头的，则直接抛错
  if (_rgb.indexOf('rgba(') !== 0 && _rgb.indexOf('rgb(') !== 0) {
    throw new TypeError('feutils.rgbToHex传入的参数格式不正确，请检查');
  }

  // 如果找不到_lIndex，_rIndex，或者这两个的位置不正确，则表示错误
  if (_lIndex === -1 || _rIndex === -1 || _lIndex >= _rIndex) {
    throw new TypeError('feutils.rgbToHex传入的参数格式不正确，请检查');
  }

  // 截断字符串，剩余1,1,1,1的格式；
  _rgb = _rgb.substring(_lIndex + 1, _rIndex);

  const _rgbArr: Array<string> = _rgb.split(',');
  const _len: number = _rgbArr.length;

  // 判断格式是否正确
  if ((_len !== 3 && _len !== 4) || !(/[\d,]+/g).test(_rgb)) {
    throw new TypeError('feutils.rgbToHex传入的参数格式不正确，请检查');
  }

  const _r: string = xToOX(_trimRgbNum(Number(_rgbArr[0] || '')));
  const _g: string = xToOX(_trimRgbNum(Number(_rgbArr[1] || '')));
  const _b: string = xToOX(_trimRgbNum(Number(_rgbArr[2] || '')));
  let _a: any = Math.round(Number(_rgbArr[3] || '') * 255);

  // 如果是3位数
  if (_len === 3 || !_a) {
    return `#${_r}${_g}${_b}`;
  } else {
    _a = xToOX(_trimRgbNum(_a));
    return `#${_r}${_g}${_b}${_a}`;
  }
}
