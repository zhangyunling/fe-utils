## xssEncode

> 进行XSS编码，与xssDecode配合使用

### 1、 调用方法

```
fdutils.xssEncode(string);
```

参数定义：
1. string 待编码的字符串

返回值：
1. 编码后的字符串

编码规则：
1. '&' -> '&amp;'
2. '<' -> '&lt;'
2. '"' -> '&quot;'
2. '\'' -> '&#39;'
2. ' ' -> '&nbsp;'

demo示例：

```
fdutils.xssEncode('&<"\'  ')
// &amp;&lt;&quot;&#39;&nbsp;&nbsp;

```

### 2、单元测试

单元测试：[xssEncode](http://www.zhangyunling.com/study/fdutils/#xssEncode)