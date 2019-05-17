## dateNature

> 根据传入的日期，转换出一些指定的节日信息

### 1、 调用方法

```
fdutils.dateNature(date);
```

参数定义：
1. date 待转换的时间信息（默认为当前时间，可以是Date对象，时间戳，秒级时间戳，日期时间字符串）

返回值：
1. 对象，包含以下信息；

返回对象包含的信息

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


demo示例：

```
fdutils.dateNature('2019/01/01')
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


fdutils.dateNature('2019/05/12')
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

### 2、单元测试

单元测试：[dateNature](http://www.zhangyunling.com/study/fdutils/#dateNature)