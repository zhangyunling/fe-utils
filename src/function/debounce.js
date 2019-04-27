/**
 * @method debounce
 * @desc 函数防抖，只触发最后一次调用；
 * @param {Function} callback 防抖后的回调函数；
 * @param {Number} wait 防抖的限制时间，单位毫秒（ms），默认100；
 * @param {Number} maxWait 最大防抖间隔，maxWait的时间内，必定会执行一次，默认为0，不限制；
 */

let isFunction = require('../boolean/isFunction');
let isNumber = require('../boolean/isNumber');

let debounce = function(callback, wait, maxWait){
  let _timer; // 计时器
  let _context; // 内部this
  let _args; // 变量
  let _wait = isNumber(wait)? (wait || 100) : 100; // 防抖时间间隔，
  let _maxWait = isNumber(maxWait) ? (maxWait || 0) : 0; // 如果是整数，那么在该整数间隔内，必定执行一次
  let _timestamp = Date.now();
  let _prevExecute = _timestamp;

  let checkWidthWait = function(_now){
    // 如果超出了限制间隔时间，那么就执行一次
    if (_now - _timestamp >= _wait) {
      return true;
    }

    // 如果没有超出，则更新当前触发的时间戳；
    _timestamp = _now;
    return false;
  };

  // 如果设置了maxWait的时候，
  let checkWidthMaxWait = function(_now){
    // 如果执行间隔，已经大于最大间隔了，就需要执行一次；
    if (_now - _prevExecute >= _maxWait) {
      return true;
    }

    return checkWidthWait(_now, _wait);
  };
  // 根据是否有最大执行间隔，做一个懒载入；
  let needRun = _maxWait ? checkWidthMaxWait : checkWidthWait;

  // 执行回调
  let run = function(){
    let _now = Date.now();

    clearTimeout(_timer);
    // 记录执行时间
    _prevExecute = _now;
    _timestamp = _now;
    // 执行
    callback.apply(_context, _args);
  }

  let cb = function(...args) {
    let _now = Date.now();

    _context = this;
    _args = args;

    // 判断是否有限制最大间隔执行
    if (!needRun(_now)){
      clearTimeout(_timer);
      _timer = setTimeout(run, _wait);
      return;
    }

    // 触发了间隔或者强制执行的逻辑；
    run();
  };

  // 检查callback的类型
  if (!isFunction(callback)) {
    throw new Error('debounce 的第一参数需要是一个函数');
  }

  return cb;
};

module.exports = debounce;