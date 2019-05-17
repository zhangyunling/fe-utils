## xssDecode

> 进行XSS解码，与xssEncode配合使用

### 1、 调用方法

```
fdutils.xssDecode(string);
```

参数定义：
1. string 带解码的字符串

返回值：
1. 解码后的字符串

解码规则：
1. '&amp;' -> '&'
2. '&lt;' -> '<'
2. '&quot;' -> '"'
2. '&#39;' -> '\''
2. '&nbsp;' -> ' '

demo示例：

```
fdutils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;')
// &<"\'  

```

### 2、单元测试

单元测试：[xssDecode](http://www.zhangyunling.com/study/fdutils/#xssDecode)