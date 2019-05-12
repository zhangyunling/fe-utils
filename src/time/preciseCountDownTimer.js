/**
 * @method preciseCountDownTimer
 * @since version 1.0.0
 * @desc 倒计时的插件
 * @param {Number} options.distTime 倒计时截止时间，有效的时间（时间戳，时间字符串，Date实例）
 * @param {Number} options.curTime 当前时间，其实也是服务器时间（时间戳，时间字符串，Date实例）
 * @param {Function} options.callback 倒计时之后的回调函数（必须）
 * @return Object ;
 *
 * @example FEUtils.preciseCountDownTimer({
 *		distTime : "13131",
 * 		curTime : 3,
 *      callback : Function(data)
 * });
 * @result Object.clear()
 * 
 * callback传入参数，对象
 * {
 *   "day":"07",        // 距离倒计时结束，剩余的 天数
 *   "hour":"08",       // 距离倒计时结束，剩余的 小时
 *   "min":18,          // 距离倒计时结束，剩余的 分钟
 *   "secs":57,         // 距离倒计时结束，剩余的 秒数
 *   "msecs":634737985  // 距离倒计时结束，剩余的 毫秒
 *   "arr": ["07","08","18","57"] // 倒计时计算成 天、时、分、秒的数组，长度为4
 * }
 * @author zhangyunling 
 */

let _dateUtils = require('../_utils/_date');

let isFunction = require('../boolean/isFunction');

// 把传入的值，尝试转换为日期对象；
let _toDate = _dateUtils.toDate;
// 格式化毫秒
let _trimResult = _dateUtils.trimCountDownSecs;

// 倒计时主函数
function _preciseCountDownTimer(options){
  
  // 传入的options，必须是一个对象；
  if (!options || typeof options !== 'object') {
    throw new TypeError('调用preciseCountDownTimer时，传入的参数有误！');
  }

  // 必须有回调函数
  if (!isFunction(options.callback)){
    throw new TypeError('preciseCountDownTimer必须要有一个callback的回调函数');
  }

  let _distSecs = _toDate(options.distTime).getTime(); // 目标截止时间的时间戳；
  let _curSecs = _toDate(options.curTime).getTime();   // 当前时间的时间戳；
  let _callback = options.callback; // 回调函数
  let _timestamp = Date.now();
  let _secsBw = _timestamp + _distSecs - _curSecs;     // 离目标节点的时间差；
  let _timer = 0; // 倒计时的计时器

  // 倒计时模块
  let _countdown = function (){
    let _tt = Date.now();
    let _secs = _secsBw - _tt;
    let _delay = 0;
            
    if (_secs <= 0){
      _callback(_trimResult(0));
      return;
    }

    _callback(_trimResult(_secs));
    
    // 纠正误差，尽量做到每秒钟在变化；
    if (_tt - _timestamp > 500){
        _delay = 2000 - _tt + _timestamp;
    } else {
        _delay = 1000 - _tt + _timestamp;
    }
    
    _timer = setTimeout(_countdown, _delay);
    _timestamp = _tt;
    
  }

  _countdown();

  return {
    clear: function(){
      clearTimeout(_timer);
    }
  };
}

module.exports = _preciseCountDownTimer;