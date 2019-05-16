## isNumber

> 判断是否为数字类型

### 1、 调用方法

```
fdutils.isNumber(value)
```

其中，只有`value`为数字时，才会返回`true`；

```
fdutils.isNumber(1)   
// true

fdutils.isNumber(NaN)  
// true

fdutils.isNumber(new Number('1')) 
// true

fdutils.isNumber('123') 
// false
```

### 2、单元测试

单元测试：[isNumber](http://www.zhangyunling.com/study/fdutils/#isNumber)