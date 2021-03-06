/**
 * @desc 项目打包的入口文件
 * @desc 当前支持api列表，自动生成的，请不要修改；
 */

// 仓库版本号相关；
export * from './.cache/version';

// 布尔型判断方法；
export * from './boolean/type';
export * from './boolean/isLogicString';
export * from './boolean/isLogicString';
export * from './boolean/isLeapYear';

// 与颜色相关的
export * from './color/colorRandom';
export * from './color/hexToRgb';
export * from './color/rgbToHex';

// 规范相关
export * from './format/numberFormat';
export * from './format/dateFormat';

// 转换相关
export * from './transfor/objToStr';
export * from './transfor/strToObj';

// 对象相关
export * from './object/deepClone';

// 安全相关
export * from './secure/xss';

// 小工具类
export * from './module/preciseTimer';
export * from './module/dateNature';
