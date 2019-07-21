## isLogicString

> 判断给定的字符串，是否是一个有效的逻辑表达式；

### 1、 调用方法

```
fdutils.isLogicString(value)
```

其中，只有`value`为有效的字符串逻辑表达式时，才会返回`true`；

### 2、 字符串的格式
1. 支持的操作符： '&&' 和 '||'，并且操作符前后，都要有字符串元素；
2. 操作符之间的字符串，包含：a-z,A-Z,0-9；
3. 支持 '()' 进行间隔处理；

### 3、 示例：

```
fdutils.isLogicString('a')
// true

fdutils.isLogicString('a && b')
// true

fdutils.isLogicString('b && (c && d || e)')
// true

fdutils.isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))
// true

fdutils.isLogicString('a && b && (c && d || e) &&')
// false
```

### 4、单元测试

单元测试：[isString](http://www.zhangyunling.com/study/fdutils/#isString)