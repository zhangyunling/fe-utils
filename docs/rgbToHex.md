## rgbToHex

> 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8

### 1、 调用方法

```
fdutils.rgbToHex(rgbColor);
```

验证字符串的规则为：

1. 必须以rgb或者rgba开头的，格式为：rgba(xx, xx, xx, xx)的字符串
2. 括号内的元素，长度为3，或者4
3. 每个xx都必须是一个数字，并且取值范围是 [0, 255]

demo示例：

```
fdutils.rgbToHex('rgb(0,0,0)');
// #000000

fdutils.rgbToHex('rgba(0,0,0,0)');
// #00000000 (hex8格式)

fdutils.rgbToHex('rg(0,0,0,0)');
// rg开头，格式错误，throw Error

```

### 2、单元测试

单元测试：[rgbToHex](http://www.zhangyunling.com/study/fdutils/#rgbToHex)