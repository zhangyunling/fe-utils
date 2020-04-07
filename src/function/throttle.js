/**
 * @method throttle
 * @since version 1.0.0
 * @desc 函数节流，一定时间内，只执行一次回调函数
 * @param {Function} callback 节流后的回调函数；
 * @param {Number} wait 节流的限制时间，单位毫秒（ms），默认100；
 * @param {Boolean} immediate 节流模式，默认为false（倒计时的最后）
 */

let isFunction = require('../boolean/isFunction');
let isNumber = require('../boolean/isNumber');
let isBoolean = require('../boolean/isBoolean');

let throttle = function(callback, wait, immediate){
  let _timer; // 计时器
  let _context; // 内部this指向
  let _args; // 变量
  let _wait = isNumber(wait)? (wait || 100) : 100; // 节流时间间隔，
  // 是否立即执行，默认值为false
  let _immediate = isBoolean(immediate) ? immediate : false;

  let cb = function(...args) {
    _context = this;
    _args = args;

    // 正在节流中
    if (_timer){
      return;
    }

    // 是否立即执行节流
    if (_immediate) {
      callback.apply(_context, _args);
    }

    _timer = setTimeout(()=>{
      if (!immediate) {
        callback.apply(_context, _args);
      }
      clearTimeout(_timer);
      _timer = 0;
    }, _wait);
  };

  // 检查callback的类型
  if (!isFunction(callback)) {
    throw new Error('throttle 的第一参数需要是一个函数');
  }

  return cb;
};

module.exports = throttle;