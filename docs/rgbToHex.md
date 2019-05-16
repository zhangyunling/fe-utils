## rgbToHex

> 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8

### 1、 调用方法

```
fdutils.rgbToHex(rgbColor);
```

验证字符串的规则为：

1. 必须以 # 开头
2. 字符串只能保护： 0-9 a-f, A-F的字符串
3. 长度为 3(hex),4(hex8), 6(hex), 8(hex8)；

demo示例：

```
fdutils.hexToRgb('#000');
// rgb(0,0,0)

fdutils.hexToRgb('#0000');
// hex8格式 -> rgba(0,0,0,0)

fdutils.hexToRgb('#000000');
// rgb(0,0,0)

fdutils.hexToRgb('#00000000');
// hex8格式 -> rgba(0,0,0,0)

```

### 2、单元测试

单元测试：[rgbToHex](http://www.zhangyunling.com/study/fdutils/#rgbToHex)