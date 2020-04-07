## numberFormat

> 把数字字符串进行分割，支持字符串类型的数字

### 1、 调用方法

```
feutils.numberFormat(options);
```

参数定义：
1. options 为一个对象，其最多支持三个属性
2. options.number 待转换的数字，必须是整数，不能是浮点型
3. options.length 每一个小单元的长度，默认值为 3
4. options.sep 分隔符，默认值为“,”

返回值：
1. 使用分隔符，分割好的数字字符串；

demo示例：

```
feutils.numberFormat({
	number: 1234567
});
// 1,234,567

feutils.numberFormat({
	number: 1234567,
	length: 4
});
// 123,4567

feutils.numberFormat({
	number: 1234567,
	length: 4,
	sep: '-'
});
// 123-4567

```

### 2、单元测试

单元测试：[numberFormat](http://www.zhangyunling.com/study/feutils/#numberFormat)