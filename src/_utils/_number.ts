// 数字相关的一些操作；

export function numberPatchZero (num: number): string {
  // 如果是NaN，则返回NaN的字符串
  if (isNaN(num)) {
    return String(num);
  }

  // 如果是个位数，则直接给个位数补0；
  return (num < 10 ? '0' : '') + num;
}
