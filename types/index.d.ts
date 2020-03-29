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

// 版本号定义
export interface LibVersionTypes {
  readonly version: string; // 字符串版本号
  readonly versionCode: number; // 数字版本号
}

// trace 上报的types类型
export interface TraceOptionsTypes {
  trace_type: string;      // trace type
  op1: string;             // trace op1
  [propName: string]: any; // 其他的自定义属性
}

// 版本号定义
export interface LibVersionTypes {
  readonly version: string; // 字符串版本号
  readonly versionCode: number; // 数字版本号
}
