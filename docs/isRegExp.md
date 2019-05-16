## isRegExp

> 判断是否为正则类型

### 1、 调用方法

```
fdutils.isRegExp(value)
```

其中，只有`value`为正则表达式时，才会返回`true`；


```
fdutils.isRegExp(/1/g);
// true

fdutils.isRegExp(new RegExp(/1/,'g'));
// true

fdutils.isRegExp(12);
// false
```

### 2、单元测试

单元测试：[isRegExp](http://www.zhangyunling.com/study/fdutils/#isRegExp)