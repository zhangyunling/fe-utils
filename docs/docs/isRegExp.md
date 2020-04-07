## isRegExp

> 判断是否为正则类型

### 1、 调用方法

```
feutils.isRegExp(value)
```

其中，只有`value`为正则表达式时，才会返回`true`；


```
feutils.isRegExp(/1/g);
// true

feutils.isRegExp(new RegExp(/1/,'g'));
// true

feutils.isRegExp(12);
// false
```

### 2、单元测试

单元测试：[isRegExp](http://www.zhangyunling.com/study/feutils/#isRegExp)