
## fe-utils
> 记录在工作中，常用到的一些JS工具；

首页：https://zhangyunling.github.io/fe-utils/

在线demo：https://zhangyunling.github.io/fe-utils/test/

## 功能列表

### 1. colorRandom

> 生成一个随机`HEX`格式的颜色；

```
colorRandom(void): string
```

单元测试：[colorRandom](https://zhangyunling.github.io/fe-utils/test/#colorRandom)

### 2. dateFormat

> 转换为指定格式的时间

```
// dateFormat
interface DateFormatTypes {
  format?: string;     // 转换后的输出格式
  date?: any;          // 待转换的时间（默认为当前时间，可以是Date对象，时间戳，秒级时间戳，日期时间字符串）
}
```

```
dateFormat(options: DateFormatTypes): string;
```

format规则：
1. yyyy 表示年
2. mm 表示月份
3. dd 表示日
4. hh 表示小时
5. ii 表示分钟
6. ss 表示秒

demo示例：

```
dateFormat({
  format: 'yyyy/mm/dd hh:ii',
  date: '2019-04-27 18:59'
})
// 2019/04/27 18:59

dateFormat({
  format: 'yyyy/mm/dd hh:ii',
  date: 1556362740000
});
// '2019/04/27 18:59

dateFormat({
  format: 'yyyy/mm/dd hh:ii',
  date: 1556362740
})
// '2019/04/27 18:59

dateFormat({
  format: 'yyyy/mm/dd hh:ii',
  date: new Date('2019-04-27 18:59')
})
// '2019/04/27 18:59

```

单元测试：[dateFormat](https://zhangyunling.github.io/fe-utils/test/#dateFormat)



### 3. dateNature
> 根据传入的日期，转换出一些指定的节日信息

方法调用

```
dateNature(date: Date | string | number | void): DateNatureTypes;
```

入参
1. date 待转换的时间信息（默认为当前时间，可以是Date对象，时间戳，秒级时间戳，日期时间字符串）

返回值：
1. 对象，包含以下信息
```
{
   "festival":{
    "solar":"公历节日",
    "week":"周节日",
    "lunar":"农历节日"
  },
  "lunar":{
    "year": "农历 年",
    "month": "农历 月",
    "day": "农历 日",
    "leap": "今年闰月是几月",
    "isLeap": "今年是否为闰年",
  },
  "solar":{
    "year": "阳历 年",
    "month": "阳历 月",
    "day": "阳历 日",
    "week": "阳历 周",
  },
  "isToday": "是否为当天",
  "distanceToday": "距离今天还有几天时间",
  "solarTerms": "节气"
}
```

示例：

```
dateNature('2019/01/01')
// {
//   "festival":{
//     "solar":"元旦",
//     "week":"",
//     "lunar":""
//   },
//   "lunar":{
//     "year":2018,
//     "leap":0,
//     "isLeap":false,
//     "month":11,
//     "day":26
//   },
//   "solar":{
//     "year":2019,
//     "month":1,
//     "day":1,
//     "week":2
//   },
//   "isToday":false,
//   "distanceToday":-136,
//   "solarTerms":""
// }


dateNature('2019/05/12')
// {
//   "festival":{
//     "solar":"国际护士节",
//     "week":"母亲节",
//     "lunar":""
//   },
//   "lunar":{
//     "year":2019,
//     "leap":0,
//     "isLeap":false,
//     "month":4,
//     "day":8
//   },
//   "solar":{
//     "year":2019,
//     "month":5,
//     "day":12,
//     "week":0
//   },
//   "isToday":false,
//   "distanceToday":-5,
//   "solarTerms":""
// }

```

单元测试：[dateNature](https://zhangyunling.github.io/fe-utils/test/#dateNature)

### 4. deepClone
> 深copy，如果不是对象，则直接返回

```
deepClone(obj: Object): Object;
```

参数定义：
1. obj 为一个对象，内部属性不定

返回值：
1. newObj，包含有传入参数obj的所有属性的新对象；

拷贝规则：
1. 如果属性值为：null，typeof 值不是object，则直接返回
2. Date，Array，Object对象，进行进一步遍历
3. 非Date，Array，Object的其他对象，直接返回，引用原来的属性值

demo示例：

```
deepClone({
  number: 1234567
});
// {
//   number: 1234567
// }

```
单元测试：[deepClone](https://zhangyunling.github.io/fe-utils/test/#deepClone)


### 5. hexToRgb

> 根据hex的值，生成rgb格式的值，支持hex8 -> rgba

```
hexToRgb(hexColor: string): string;
```

验证字符串的规则为：

1. 必须以 # 开头
2. 字符串只能保护： 0-9 a-f, A-F的字符串
3. 长度为 3(hex),4(hex8), 6(hex), 8(hex8)；

demo示例：

```
hexToRgb('#000');
// rgb(0,0,0)

hexToRgb('#0000');
// hex8格式 -> rgba(0,0,0,0)

hexToRgb('#000000');
// rgb(0,0,0)

hexToRgb('#00000000');
// hex8格式 -> rgba(0,0,0,0)

```

单元测试：[hexToRgb](https://zhangyunling.github.io/fe-utils/test/#hexToRgb)

### 6. isArray

> 判断是否为数组类型

```
isArray(value: any): boolean
```

其中，只有`value`为数组时，才会返回`true`；

单元测试：[isArray](https://zhangyunling.github.io/fe-utils/test/#isArray)

### 7. isBoolean

> 判断是否为布尔值类型

```
isBoolean(value: any): boolean
```

其中，只有`value`为`true`/ `new Boolean(true)`时，才会返回`true`；

单元测试：[isBoolean](https://zhangyunling.github.io/fe-utils/test/#isBoolean)

### 8. isDate

> 判断是否为Date类型

```
isDate(value: any): boolean
```

其中，只有`value`为`Date`的实例时，才会返回`true`；

单元测试：[isDate](https://zhangyunling.github.io/fe-utils/test/#isDate)

### 9. isError

> 判断是否为Error对象

```
isError(value: any): boolean
```

其中，只有`value`为`Error`的实例时，才会返回`true`；

单元测试：[isError](https://zhangyunling.github.io/fe-utils/test/#isError)

### 10. isFunction

> 判断是否为函数

```
isFunction(value: any): boolean
```

其中，只有`value`为函数时，才会返回`true`；

单元测试：[isFunction](https://zhangyunling.github.io/fe-utils/test/#isFunction)

### 11. isLeapYear

> 判断是否为闰年

```
isLeapYear(value: any): boolean
```

`value`是否为闰年，如果为闰年，则返回`true`；

```
isLeapYear(2012) 
// true

isLeapYear(2019) 
// false
```

单元测试：[isLeapYear](https://zhangyunling.github.io/fe-utils/test/#isLeapYear)

### 12. isLogicString

> 判断给定的字符串，是否是一个有效的逻辑表达式；

```
isLogicString(value: string): boolean;
```

其中，只有`value`为有效的字符串逻辑表达式时，才会返回`true`；

value 字符串的格式
1. 支持的操作符： '&&' 和 '||'，并且操作符前后，都要有字符串元素；
2. 操作符之间的字符串，包含：a-z,A-Z,0-9；
3. 支持 '()' 进行间隔处理；

示例：

```
isLogicString('a')
// true

isLogicString('a && b')
// true

isLogicString('b && (c && d || e)')
// true

isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))
// true

isLogicString('a && b && (c && d || e) &&')
// false
```

单元测试：[isLogicString](https://zhangyunling.github.io/fe-utils/test/#isLogicString)

### 13. isNumber

> 判断是否为数字类型

```
isNumber(value: any): boolean;
```

其中，只有`value`为数字时，才会返回`true`；

```
isNumber(1)   
// true

isNumber(NaN)  
// true

isNumber(new Number('1')) 
// true

isNumber('123') 
// false
```

单元测试：[isNumber](https://zhangyunling.github.io/fe-utils/test/#isNumber)

### 14. isObject

> 判断是否为对象类型

```
isObject(value: any): boolean;
```

其中，只有`value`为`Object`的实例时，才会返回`true`；

```
isObject({})
// true

isObject(Object.create(null))
// true

isObject(new Object())
// true

isObject([])
// false
```

单元测试：[isObject](https://zhangyunling.github.io/fe-utils/test/#isObject)

### 16. isRegExp

> 判断是否为正则类型

```
isRegExp(value: any): boolean;
```

其中，只有`value`为正则表达式时，才会返回`true`；

```
isRegExp(/1/g);
// true

isRegExp(new RegExp(/1/,'g'));
// true

isRegExp(12);
// false
```

单元测试：[isRegExp](https://zhangyunling.github.io/fe-utils/test/#isRegExp)

### 17. isString

> 判断是否为字符串类型

```
isString(value: any): boolean;
```

其中，只有`value`为字符串时，才会返回`true`；

单元测试：[isString](https://zhangyunling.github.io/fe-utils/test/#isString)

### 18. numberFormat

> 把数字字符串进行分割，支持字符串类型的数字

```
numberFormat(options: NumberFormatTypes): string;
```

入参格式：

```
// numberFormat
interface NumberFormatTypes {
  number: number | string;  // 待转换的数字，必须是整数，不能是浮点型
  length?: number; // 每一个小单元的长度，默认值为 3
  sep?: string;    // 分隔符，默认值为“,”
}
```

返回值：
1. 使用分隔符，分割好的数字字符串；

demo示例：

```
numberFormat({
  number: 1234567
});
// 1,234,567

numberFormat({
  number: 1234567,
  length: 4
});
// 123,4567

numberFormat({
  number: 1234567,
  length: 4,
  sep: '-'
});
// 123-4567

```

单元测试：[numberFormat](https://zhangyunling.github.io/fe-utils/test/#numberFormat)

### 19. objToStr

> 把规定格式的Object转换为String格式

```
objToStr(obj: Object, sep?: string = '&'): string;
```

参数定义：
1. obj 为一个对象，待转换的对象
2. sep转换对象后的间隔符，默认为：'&'

返回值：
1. 使用分隔符，拼接好的字符串；

转换规则：
1. 只支持单层Object转换；
2. value值会被encodeURIComponent编码，防止一些特殊字符；
3. 如果value值是Object类型，则会转换失败，抛出错误；

demo示例：

```
objToStr({a: 1, b: 2})
// a=1&b=2

objToStr({a: 1, b: 2}, ';')
// a=1;b=2

objToStr({
  a: true,
  b: "9999999999999999",
  c: undefined,
  d: null
}, ';') 
// a=true;b=9999999999999999;c=undefined;d=null

objToStr({a: '#123'})
// a=%23123

```

单元测试：[objToStr](https://zhangyunling.github.io/fe-utils/test/#objToStr)

### 20. preciseTimer

> 倒计时的插件，解决当浏览器进入后台时，计时器函数变慢的问题；

```
preciseTimer(options: PreciseTimerTypes);
```

参数定义：
```
// preciseTimer
interface PreciseTimerTypes {
  // 回调函数
  callback: (data: TrimSecsTypes) => void;
  // 目标倒计时时间，时间戳，时间字符串，Date实例
  distTime: Date | number | string;
  // 当前时间，时间戳，时间字符串，Date实例
  curTime: Date | number | string;
}
```

回调函数的参数：

```
// trimCountDownSecs
interface TrimSecsTypes {
  msecs: number;      // 剩余毫秒数
  secs: number;       // 剩余秒数
  min: number;        // 剩余分钟
  hour: number;       // 剩余小时
  day: number;        // 剩余天数
  arr: Array<string>  // 剩余天数数据 ["07","08","18","57"]
}
```

返回值：
1. timer，如果外部需要停止计时器，可以通过：clearTimeout(timer)清理；

demo示例：

```
let obj = preciseTimer({
  distTime : "2019/05/01 21:38:00",
  curTime : "2019/05/01 21:37:51",
  callback : function(data){
    console.log(data);
  }
});

```

单元测试：[preciseTimer](https://zhangyunling.github.io/fe-utils/test/#preciseTimer)

### 21. rgbToHex

> 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8

```
rgbToHex(rgbColor: string): string;
```

验证字符串的规则为：

1. 必须以rgb或者rgba开头的，格式为：rgba(xx, xx, xx, xx)的字符串
2. 括号内的元素，长度为3，或者4
3. 每个xx都必须是一个数字，并且取值范围是 [0, 255]

demo示例：

```
rgbToHex('rgb(0,0,0)');
// #000000

rgbToHex('rgba(0,0,0,0)');
// #00000000 (hex8格式)

rgbToHex('rg(0,0,0,0)');
// rg开头，格式错误，throw Error

```

单元测试：[rgbToHex](https://zhangyunling.github.io/fe-utils/test/#rgbToHex)

### 22. strToObj

> 把规定格式的Str转换为Object格式

```
strToObj(str: string, sep?: string = '&'): Object;
```

参数定义：
1. str 为一个待转换的字符串
2. sep转换对象后的间隔符，默认为：'&'

返回值（Object）：
1. 使用分隔符进行分割，组成的对象；

转换规则：
1. 格式必须为：key=value{sep}key=value格式（默认sep的话，就是search参数格式）；
2. key不存在时，会认为出错，抛出错误，转换失败
3. undefined，null，true，false的字符串，会被转换为对应的类型；
4. Number类型的，如果长度小于15，则会被转换为Number类型；
5. 其他字符串，会被decodeURIComponent一下；

demo示例：

```
strToObj('a=1&b&c=2')
// {a: 1, b: undefined, c: 2}

strToObj('a=true;b=9999999999999999;c=undefined;d=null', ';')
// {
//   a: true,
//   b: "9999999999999999",
//   c: undefined,
//   d: null
// }

strToObj('a=%23123') 
// {a: '#123'}

strToObj('a=1&b=1=2')
// error

```

单元测试：[strToObj](https://zhangyunling.github.io/fe-utils/test/#strToObj)

### 23. xssDecode

> 进行XSS解码，与xssEncode配合使用

```
xssDecode(str: string): string;
```

参数定义：
1. string 带解码的字符串

返回值：
1. 解码后的字符串

解码规则：
1. '&amp;' -> '&'
2. '&lt;' -> '<'
2. '&quot;' -> '"'
2. '&#39;' -> '\''
2. '&nbsp;' -> ' '

demo示例：

```
xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;')
// &<"\'  

```

单元测试：[xssDecode](https://zhangyunling.github.io/fe-utils/test/#xssDecode)

### 24. xssEncode

> 进行XSS编码，与xssDecode配合使用

```
xssEncode(str: string): string;
```

参数定义：
1. string 待编码的字符串

返回值：
1. 编码后的字符串

编码规则：
1. '&' -> '&amp;'
2. '<' -> '&lt;'
2. '"' -> '&quot;'
2. '\'' -> '&#39;'
2. ' ' -> '&nbsp;'

demo示例：

```
xssEncode('&<"\'  ')
// &amp;&lt;&quot;&#39;&nbsp;&nbsp;

```

单元测试：[xssEncode](https://zhangyunling.github.io/fe-utils/test/#xssEncode)