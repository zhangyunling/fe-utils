/**
 * @method dateFormat
 * @since version 1.0.0
 * @desc 转换为指定格式的时间
 * @props {String} format 转换成的目标格式，默认值为:"yyyy/mm/dd hh:ii"
 * @props {Number/String/Date} date   输入的时间戳，或者待转换的时间，不传该属性是，取当前的时间戳
 * @return {String} 返回转换好的指定的日期时间的字符串
 *
 * @example FEUtils.dateFormat({
 *		format : "yyyy-mm-dd hh时ii分ss秒",
 * 		date : "2019/04/27 16:24:12"
 * });
 * @result {String} "2019-04-27 16时24分12秒"
 *
 */

let _dateUtils = require('../_utils/_date');
let _numberUtils = require('../_utils/_number');

// 把传入的值，尝试转换为日期对象；
let _toDate = _dateUtils.toDate;
// 把小于10的数字，前面补零；
let _tf = _numberUtils.numberPatchZero;

// 正则替换
let _proxy = {
  'yyyy': function(date){
  	return date.getFullYear();
  },
  'mm': function(date){
  	return _tf(date.getMonth() + 1);
  },
  'dd': function(date){
  	return _tf(date.getDate());
  },
  'hh': function(date){
  	return _tf(date.getHours());
  },
  'ii': function(date){
  	return _tf(date.getMinutes());
  },
  'ss': function(date){
  	return _tf(date.getSeconds());
  }
};

function dateFormat(options){
	if (!options || typeof options !== 'object') {
		throw new TypeError('调用dateFormat时，传入的参数有误！');
	}

	let format = options.format;
	let date = _toDate(options.date);
	
	if (!format || typeof format !== 'string') {
		format = 'yyyy/mm/dd hh:ii';
	}
	
  return format.replace(/yyyy|mm|dd|hh|ii|ss/g, function(key){
  	return _proxy[key](date);
  });
}

module.exports = dateFormat;