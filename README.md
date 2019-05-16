
前端基础工具库（最新版本：1.0.2）

> 目的：节省时间，高效完成工作；

## 使用与安装；

> 支持UMD模式的使用；

1. 直接引入；

直接下载：[fdutils.min.js](https://github.com/zhangyunling/fdutils/blob/master/dist/fdutils.min.js)
单元测试：[fdutils](http://www.zhangyunling.com/study/fdutils/)

直接使用`script`引入，引入之后，就可以按照项目中的模块加载机制，进行加载（未使用模块加载机制则直接使用全局变量：`fdutils`）；

2. npm 包

### npm:
``` bash
$ npm i fdutils -D
```

## 支持的API


- `[isArray](./docs/isArray.md)`: (v:`1.0.0`) 判断是否为数组类型
- `[isBoolean](./docs/isBoolean.md)`: (v:`1.0.0`) 判断是否为布尔值类型
- `[isDate](./docs/isDate.md)`: (v:`1.0.0`) 判断是否为Date类型
- `[isError](./docs/isError.md)`: (v:`1.0.0`) 判断是否为Error对象
- `[isFunction](./docs/isFunction.md)`: (v:`1.0.0`) 判断是否为函数
- `[isLeapYear](./docs/isLeapYear.md)`: (v:`1.0.0`) 判断是否为闰年
- `[isNumber](./docs/isNumber.md)`: (v:`1.0.0`) 判断是否为数字类型
- `[isObject](./docs/isObject.md)`: (v:`1.0.0`) 判断是否为对象类型
- `[isRegExp](./docs/isRegExp.md)`: (v:`1.0.0`) 判断是否为正则类型
- `[isString](./docs/isString.md)`: (v:`1.0.0`) 判断是否为字符串类型
- `[colorRandom](./docs/colorRandom.md)`: (v:`1.0.0`) 生成一个随机的颜色
- `[hexToRgb](./docs/hexToRgb.md)`: (v:`1.0.0`) 根据hex的值，生成rgb格式的值，支持hex8 -> rgba
- `[rgbToHex](./docs/rgbToHex.md)`: (v:`1.0.0`) 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
- `debounce`: (v:`1.0.0`) 函数防抖，只触发最后一次调用；
- `throttle`: (v:`1.0.0`) 函数节流，一定时间内，只执行一次回调函数
- `numberFormat`: (v:`1.0.0`) 把数字字符串进行分割，支持字符串类型的数字
- `deepClone`: (v:`1.0.0`) 深copy，如果不是对象，则直接返回
- `objectToString`: (v:`1.0.0`) 把规定格式的Object转换为String格式
- `xssDecode`: (v:`1.0.0`) 进行XSS编码
- `xssEncode`: (v:`1.0.0`) 进行XSS编码
- `stringToObject`: (v:`1.0.0`) 把规定格式的Str转换为Object格式
- `dateFormat`: (v:`1.0.0`) 转换为指定格式的时间
- `dateNature`: (v:`1.0.0`) 根据传入的日期，转换出一些指定的节日信息
- `preciseCountDownTimer`: (v:`1.0.0`) 倒计时的插件


