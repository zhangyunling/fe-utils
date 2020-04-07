## hexToRgb

> 根据hex的值，生成rgb格式的值，支持hex8 -> rgba

### 1、 调用方法

```
feutils.hexToRgb(hexColor);
```

验证字符串的规则为：

1. 必须以 # 开头
2. 字符串只能保护： 0-9 a-f, A-F的字符串
3. 长度为 3(hex),4(hex8), 6(hex), 8(hex8)；

demo示例：

```
feutils.hexToRgb('#000');
// rgb(0,0,0)

feutils.hexToRgb('#0000');
// hex8格式 -> rgba(0,0,0,0)

feutils.hexToRgb('#000000');
// rgb(0,0,0)

feutils.hexToRgb('#00000000');
// hex8格式 -> rgba(0,0,0,0)

```

### 2、单元测试

单元测试：[hexToRgb](http://www.zhangyunling.com/study/feutils/#hexToRgb)