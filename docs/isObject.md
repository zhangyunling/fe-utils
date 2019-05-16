## isObject

> 判断是否为对象类型

### 1、 调用方法

```
fdutils.isObject(value)
```

其中，只有`value`为`Object`的实例时，才会返回`true`；

```
fdutils.isObject({})
// true

fdutils.isObject(Object.create(null))
// true

fdutils.isObject(new Object())
// true

fdutils.isObject([])
// false
```

### 2、单元测试

单元测试：[isObject](http://www.zhangyunling.com/study/fdutils/#isObject)