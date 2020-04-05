/**
 * @desc jsbridge相关的类型定义，
 * @desc 参考地址：https://www.tslang.cn/docs/handbook/declaration-files/by-example.html
 */

// 给默认对象，可以添加任意属性的一个接口类型；
export interface DefaultObjectTypes {
  [propName: string]: any;
}

// 给默认对象，字符串与字符串
export interface DefaultStringTypes {
  [propName: string]: string;
}

// numberFormat
export interface NumberFormatTypes {
  number: number | string;  // 待拆分的数字
  length?: number; // 拆分的长度
  sep?: string;    // 拆分使用的间隔符；
}