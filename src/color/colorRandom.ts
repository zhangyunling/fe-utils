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

// 获取随机的hex字段
function _get2 (): string {
  let v: string = Math.floor(Math.random() * 256).toString(16);

  // 0 - 15期间，补齐长度
  if (v.length === 1) {
    v = `0${v}`;
  }

  return v;
}

export function colorRandom (): string {
  return `#${_get2()}${_get2()}${_get2()}`;
}
