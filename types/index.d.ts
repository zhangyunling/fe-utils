/**
 * @desc jsbridge相关的类型定义，
 * @desc 参考地址：https://www.tslang.cn/docs/handbook/declaration-files/by-example.html
 */

// 给默认对象，可以添加任意属性的一个接口类型；
export interface DefaultObjectTypes {
  [propName: string]: any;
}

// 给默认对象，可以添加任意属性的一个接口类型；
export interface DefaultFunctionTypes {
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

// trimCountDownSecs
export interface TrimSecsTypes {
  msecs: number;      // 剩余毫秒数
  secs: number;       // 剩余秒数
  min: number;        // 剩余分钟
  hour: number;       // 剩余小时
  day: number;        // 剩余天数
  arr: Array<string>  // 剩余天数数据
}

// dateFormat
export interface DateFormatTypes {
  format?: string;     // 转换后的输出格式
  date?: any;          // 待转换的时间
}

// preciseTimer
export interface PreciseTimerTypes {
  // 回调函数
  callback: (data: TrimSecsTypes) => void;
  // 目标倒计时时间，时间戳，时间字符串，Date实例
  distTime: Date | number | string;
  // 当前时间，时间戳，时间字符串，Date实例
  curTime: Date | number | string;
}

// preciseTimer
export interface PreciseTimerResTypes {
  // 返回一个对象，只支持一个clear函数
  clear: Function;
}

export interface DateEasterTypes {
  m: number;
  d: number;
}

export interface DateFestivalTypes {
  solar: string;       // 公历节日
  week: string;        // 周节日
  lunar: string;       // 农历节日
  estDay?: string;     // 复活节
}

export interface DateLunarTypes {
  year: number;        // 农历 年
  month: number;       // 农历 月
  day: number;         // 农历 日
  leap: number;        // 今年闰月是几月
  isLeap: boolean;     // 农历 月
}

export interface DateSolarTypes {
  "year": number;      // "阳历 年
  "month": number;     // "阳历 月
  "day": number;       // "阳历 日
  "week": number;      // "阳历 周
}

// dateNature
export interface DateNatureTypes {
  festival?: DateFestivalTypes,
  lunar?: DateLunarTypes,
  solar?: DateSolarTypes,
  isToday?: boolean;      // 是否为当天
  distanceToday?: number; // 距离今天还有几天时间
  solarTerms?: string;    // 节气
}
