/**
 * @method xssEncode
 * @since version 1.0.0
 * @desc 进行XSS编码，与xssDecode配合使用
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example feutils.xssEncode(string);
 *
 */
// xss的编码
export function xssEncode (str: string = ''): string {
  // 如果字符串为空，则直接返回
  if (!str) {
    return str;
  }

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\s/g, '&nbsp;');
};

/**
 * @method xssDecode
 * @since version 1.0.0
 * @desc 进行XSS解码，与xssEncode配合使用
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example feutils.xssEncode(string);
 *
 */
export function xssDecode (str: string = ''): string {
  // 如果字符串为空，则直接返回
  if (!str) {
    return str;
  }

  return str.replace(/&amp;?/g, '&')
    .replace(/&lt;?/g, '<')
    .replace(/&quot;?/g, '"')
    .replace(/&#39;?/g, '\'')
    .replace(/&nbsp;?/g, ' ');
};
