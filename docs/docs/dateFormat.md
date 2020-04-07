## dateFormat

> 转换为指定格式的时间

### 1、 调用方法

```
feutils.dateFormat(options);
```

参数定义：
1. options 转换信息的对象
2. options.date 待转换的时间信息（默认为当前时间，可以是Date对象，时间戳，秒级时间戳，日期时间字符串）
3. options.format 转换后的格式；

返回值：
1. 返回一个字符串，格式为format格式的日期时间

format规则：
1. yyyy 表示年
2. mm 表示月份
3. dd 表示日
4. hh 表示小时
5. ii 表示分钟
6. ss 表示秒

demo示例：

```
feutils.dateFormat({
	format: 'yyyy/mm/dd hh:ii',
	date: '2019-04-27 18:59'
})
// 2019/04/27 18:59


feutils.dateFormat({
	format: 'yyyy/mm/dd hh:ii',
	date: 1556362740000
});
// '2019/04/27 18:59


feutils.dateFormat({
	format: 'yyyy/mm/dd hh:ii',
	date: 1556362740
})
// '2019/04/27 18:59

feutils.dateFormat({
	format: 'yyyy/mm/dd hh:ii',
	date: new Date('2019-04-27 18:59')
})
// '2019/04/27 18:59

```

### 2、单元测试

单元测试：[dateFormat](http://www.zhangyunling.com/study/feutils/#dateFormat)