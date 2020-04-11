/**
 * @method dateNature
 * @since version 1.0.0
 * @desc 根据传入的日期，转换出一些指定的节日信息
 * @props {String} format 转换成的目标格式，默认值为:"yyyy/mm/dd hh:ii"
 * @props {Number/String/Date} date 输入的时间戳，或者待转换的时间，不传该属性是，取当前的时间戳
 * @return {String} 返回转换好的指定的日期时间的字符串
 *
 * @example feutils.dateNature("2019/04/27");
 *
 * @result {Object} "当前天的农历，阳历，节日，节气等信息"
 *  {
 *   "festival":{
 *     "solar":"公历节日",
 *     "week":"周节日",
 *     "lunar":"农历节日"
 *   },
 *   "lunar":{
 *     "year": "农历 年",
 *     "month": "农历 月",
 *     "day": "农历 日",
 *     "leap": "今年闰月是几月",
 *     "isLeap": "今年是否为闰年",
 *   },
 *   "solar":{
 *     "year": "阳历 年",
 *     "month": "阳历 月",
 *     "day": "阳历 日",
 *     "week": "阳历 周",
 *   },
 *   "isToday": "是否为当天",
 *   "distanceToday": "距离今天还有几天时间",
 *   "solarTerms": "节气"
 * }
 *
 */
import {
  toDate,
  trimCountDownSecs as _trimResult,
  tInfo,
  solarTerm,
  sTermInfo,
  sFtv,
  lFtv,
  wFtv
} from '../_utils/_date';
import {
  numberPatchZero as _tf
} from '../_utils/_number';
import {
  isDate
} from '../boolean/type';
import { dateFormat } from '../format/dateFormat';
import {
  DateNatureTypes,
  DateEasterTypes,
  // DateFestivalTypes,
  DateLunarTypes,
  DateSolarTypes
} from '../../types/index';

// 当天的一些信息
const _todayStr: string = dateFormat({
  format: 'yyyy/mm/dd'
});
const _todayNum: number = (new Date(_todayStr)).getTime();

// 日期的一些简单工具
const _utils = {
  // 返回农历 y年的总天数
  lYearDays: function (y: number): number {
    let i: number = 0x8000;
    let sum: number = 348;

    for (i; i > 0x8; i >>= 1) {
      sum += (tInfo[y - 1900] & i) ? 1 : 0;
    }

    return sum + _utils.leapDays(y);
  },

  // 返回农历 y年闰月的天数
  leapDays: function (y: number): number {
    if (_utils.leapMonth(y)) {
      return (tInfo[y - 1900] & 0x10000) ? 30 : 29;
    } else {
      return 0;
    }
  },

  // 返回农历 y年闰哪个月 1-12 , 没闰返回 0
  leapMonth: function (y: number): number {
    return tInfo[y - 1900] & 0xf;
  },

  // 返回农历 y年m月的总天数
  monthDays: function (y: number, m: number): number {
    return (tInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29;
  },

  // 某年的第n个节气为几日(从0小寒起算)
  sTerm: function (y: number, n: number): number {
    if (y === 2009 && n === 2) {
      sTermInfo[n] = 43467
    }

    const offDate: Date = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5));

    return offDate.getUTCDate();
  },

  // 返回该年的复活节(春分后第一次满月周后的第一主日)
  easter: function (y: number): DateEasterTypes {
    // 取得春分日期
    const term2: number = _utils.sTerm(y, 5);
    // 取得春分的公历日期控件(春分一定出现在3月)
    const dayTerm2: Date = new Date(Date.UTC(y, 2, term2, 0, 0, 0, 0));
    // 取得取得春分农历
    const lDayTerm2: DateLunarTypes = _utils.lunar(dayTerm2);
    // 下个月圆的相差天数
    let lMlen: number = 0;

    if (lDayTerm2.day < 15) {
      lMlen = 15 - lDayTerm2.day;
    } else {
      lMlen = (lDayTerm2.isLeap ? _utils.leapDays(y) : _utils.monthDays(y, lDayTerm2.month)) - lDayTerm2.day + 15;
    }

    // 一天等于 1000*60*60*24 = 86400000 毫秒
    const l15: Date = new Date(dayTerm2.getTime() + 86400000 * lMlen);
    // 求出第一次月圆为公历几日

    // 复活节对应的时间对象
    const dayEaster: Date = new Date(l15.getTime() + 86400000 * (7 - l15.getUTCDay()));
    // 求出下个周日

    return {
      m: dayEaster.getUTCMonth(),
      d: dayEaster.getUTCDate()
    };
  },

  // 算出农历, 传入日期控件, 返回农历日期控件
  // 该控件属性有 .year .month .day .isLeap
  lunar: function (objDate: Date): DateLunarTypes {
    let i: number = 1900;
    let temp: number = 0;
    let offset: number = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;

    for (i; i < 2150 && offset > 0; i++) {
      temp = _utils.lYearDays(i);
      offset -= temp;
    }

    if (offset < 0) {
      offset += temp;
      i--;
    }

    const lunar: DateLunarTypes = {
      year: i,
      // 闰哪个月
      leap: _utils.leapMonth(i),
      isLeap: false,
      month: 0,
      day: 0
    };

    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (lunar.leap > 0 && i === (lunar.leap + 1) && lunar.isLeap === false) {
        --i;
        lunar.isLeap = true; temp = _utils.leapDays(lunar.year);
      } else {
        temp = _utils.monthDays(lunar.year, i);
      }

      // 解除闰月
      if (lunar.isLeap === true && i === (lunar.leap + 1)) {
        lunar.isLeap = false;
      }
      offset -= temp;
    }
    if (offset === 0 && lunar.leap > 0 && i === lunar.leap + 1) {
      if (lunar.isLeap) {
        lunar.isLeap = false;
      } else {
        lunar.isLeap = true; --i;
      }
    }
    if (offset < 0) {
      offset += temp; --i;
    }

    lunar.month = i;
    lunar.day = offset + 1;

    return lunar;
  },

  // 获取公历的日期等,包括
  getDate: function (date: any, dateObj: DateNatureTypes): void {
    const secs: number = 86400000;
    // 获取公历的日期
    const solar: DateSolarTypes = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay()
    }
    dateObj.solar = solar;

    // 判断是否为今天
    if (_todayStr === dateFormat({
      date: date,
      format: 'yyyy/mm/dd'
    })) {
      dateObj.isToday = true;
      dateObj.distanceToday = 0;
    } else {
      dateObj.isToday = false;
      dateObj.distanceToday = Math.floor((date.getTime() - _todayNum) / secs);
    }
  },

  // 添加节气
  solarTerms: function (dateObj: DateNatureTypes): void {
    const solar: DateSolarTypes = dateObj.solar;
    const y: number = solar.year;
    const m: number = solar.month - 1;
    const d: number = solar.day;
    let v: number = _utils.sTerm(y, m * 2);

    if (v === d) {
      dateObj.solarTerms = solarTerm[m * 2];
      return;
    }

    v = _utils.sTerm(y, m * 2 + 1);

    if (v === d) {
      dateObj.solarTerms = solarTerm[m * 2 + 1];
    } else {
      dateObj.solarTerms = '';
    }
  },

  // 复活节
  addEstDay: function (dateObj: DateNatureTypes): void {
    const solar: DateSolarTypes = dateObj.solar;
    const y: number = solar.year;
    const m: number = solar.month - 1;
    const d: number = solar.day;

    if (m !== 2 && m !== 3) {
      return;
    }

    // 复活节只出现在3或4月
    const estDay: DateEasterTypes = _utils.easter(y);

    if (m === estDay.m && d === estDay.d) {
      dateObj.festival.estDay = '复活节';
    }
  },

  // 根据日期，活动是该月的第几周
  getWeekNumber: function (solar: DateSolarTypes): number {
    const y: number = solar.year;
    const m: number = solar.month;
    const _sw: number = new Date(`${y}/${m}/1`).getDay();
    let _d: number = solar.day - (7 - _sw);
    let _rw: number = 1;

    while (_d >= 7) {
      _rw++;
      _d -= 7;
    }

    return _rw;
  },

  // 添加周节日
  weekFestival: function (dateObj: DateNatureTypes): void {
    const solar: DateSolarTypes = dateObj.solar;
    const m: string = _tf(solar.month);
    const w: number = solar.week;
    const weekNum: number = _utils.getWeekNumber(solar);
    const key: string = `${m}${weekNum}${w}`;

    // 周节日
    dateObj.festival.week = wFtv[key] || '';
  },

  // 添加公历节日
  solarFestival: function (dateObj: DateNatureTypes): void {
    const solar: DateSolarTypes = dateObj.solar;
    const day: string = _tf(solar.month) + _tf(solar.day);

    // 公历节日
    dateObj.festival.solar = sFtv[day] || '';
  },

  // 添加农历节日的
  lunarFestival: function (dateObj: DateNatureTypes): void {
    const lunar: DateLunarTypes = dateObj.lunar;
    const day: string = _tf(lunar.month) + _tf(lunar.day);

    // 农历节日
    dateObj.festival.lunar = lFtv[day] || '';
  }
};

export function dateNature (date: number | string | Date): DateNatureTypes {
  const _date: Date = toDate(date);
  const _dateObj: DateNatureTypes = {
    festival: {
      solar: '',
      week: '',
      lunar: ''
    }
  };

  // 如果返回的不是一个日期对象，则直接抛出异常
  if (!isDate(_date)) {
    throw new TypeError('在调用feutils.dateNature时，传入的参数不是一个合法的Date实例！date=' + date);
  }

  // 获取农历的日期，并返回一个对象
  _dateObj.lunar = _utils.lunar(_date);

  // 获取公历的日期，并添加到传入的对象中去。
  _utils.getDate(_date, _dateObj);

  // 添加节气
  _utils.solarTerms(_dateObj);

  // 添加复活节
  _utils.addEstDay(_dateObj);

  // 添加公历节日
  _utils.solarFestival(_dateObj);

  // 添加周纪念日
  _utils.weekFestival(_dateObj)

  // 添加农历的节日
  _utils.lunarFestival(_dateObj);

  return _dateObj;
}
