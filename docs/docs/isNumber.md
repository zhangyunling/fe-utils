## isNumber

> 判断是否为数字类型

### 1、 调用方法

```
feutils.isNumber(value)
```

其中，只有`value`为数字时，才会返回`true`；

```
feutils.isNumber(1)   
// true

feutils.isNumber(NaN)  
// true

feutils.isNumber(new Number('1')) 
// true

feutils.isNumber('123') 
// false
```

### 2、单元测试

单元测试：[isNumber](http://www.zhangyunling.com/study/feutils/#isNumber)