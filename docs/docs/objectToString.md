## objToStr

> 把规定格式的Object转换为String格式

### 1、 调用方法

```
feutils.objToStr(obj, sep);
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
feutils.objToStr({a: 1, b: 2})
// a=1&b=2

feutils.objToStr({a: 1, b: 2}, ';')
// a=1;b=2

feutils.objToStr({
  a: true,
  b: "9999999999999999",
  c: undefined,
  d: null
}, ';') 
// a=true;b=9999999999999999;c=undefined;d=null

feutils.objToStr({a: '#123'})
// a=%23123

```

### 2、单元测试

单元测试：[objToStr](http://www.zhangyunling.com/study/feutils/#objToStr)