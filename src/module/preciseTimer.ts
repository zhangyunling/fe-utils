/**
 * @method preciseCountDownTimer
 * @since version 1.0.0
 * @desc 倒计时的插件
 * @param {Number} options.distTime 倒计时截止时间，有效的时间（时间戳，时间字符串，Date实例）
 * @param {Number} options.curTime 当前时间，其实也是服务器时间（时间戳，时间字符串，Date实例）
 * @param {Function} options.callback 倒计时之后的回调函数（必须）
 * @return Object ;
 *
 * @example feutils.preciseCountDownTimer({
 *   distTime : "13131",
 *   curTime : 3,
 *   callback : Function(data)
 * });
 * @result Object.clear()
 *
 * callback传入参数，对象
 * {
 *   "day":07,        // 距离倒计时结束，剩余的 天数
 *   "hour":08,       // 距离倒计时结束，剩余的 小时
 *   "min":18,          // 距离倒计时结束，剩余的 分钟
 *   "secs":57,         // 距离倒计时结束，剩余的 秒数
 *   "msecs":634737985  // 距离倒计时结束，剩余的 毫秒
 *   "arr": ["07","08","18","57"] // 倒计时计算成 天、时、分、秒的数组，长度为4
 * }
 * @author zhangyunling
 */

import {
  toDate,
  trimCountDownSecs as _trimResult
} from '../_utils/_date';
import {
  PreciseTimerTypes,
  PreciseTimerResTypes
} from '../../types/index';

// 倒计时主函数
export function preciseTimer (options: PreciseTimerTypes): PreciseTimerResTypes {
  // 目标截止时间的时间戳；
  const _distSecs: number = toDate(options.distTime).getTime();
  // 当前时间的时间戳；
  const _curSecs: number = toDate(options.curTime).getTime();
  // 回调函数
  let _timestamp: number = (new Date()).getTime();
  // 离目标节点的时间差；
  const _secsBw: number = _timestamp + _distSecs - _curSecs;
  // 倒计时的计时器
  let _timer: any = 0;

  // 倒计时模块
  const _countdown: Function = function (): void {
    const _tt: number = (new Date()).getTime();
    const _secs: number = _secsBw - _tt;
    let _delay: number = 0;

    if (_secs <= 0) {
      options.callback(_trimResult(0));
      return;
    }

    options.callback(_trimResult(_secs));

    // 纠正误差，尽量做到每秒钟在变化；
    if (_tt - _timestamp > 500) {
      _delay = 2000 - _tt + _timestamp;
    } else {
      _delay = 1000 - _tt + _timestamp;
    }
    _timer = setTimeout(_countdown, _delay);
    _timestamp = _tt;
  }

  _countdown();

  return {
    clear: function () {
      clearTimeout(_timer);
    }
  };
}
