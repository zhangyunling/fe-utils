
前端基础工具库（最新版本：1.0.4）

> 目的：节省时间，高效完成工作；

## 使用与安装；

> 支持UMD模式的使用；

1. 直接引入；

直接下载：[fdutils.min.js](https://github.com/zhangyunling/fdutils/blob/master/dist/fdutils.min.js)

单元测试：[fdutils](http://www.zhangyunling.com/study/fdutils/)

直接使用`script`引入，引入之后，就可以按照项目中的模块加载机制，进行加载（未使用模块加载机制则直接使用全局变量：`fdutils`）；

2. npm 包

``` bash
$ npm i fdutils
```

## 新增错误处理（1.0.4版本）
> 在使用过程中，也许你会碰到一些兼容问题，所以这里统一处理了错误上报；

但是，需要使用者，自己做一些工作，自定义上报的函数；

``` bash
/**
 * data.name ，异常的方法
 * data.message，异常的信息；
 */
fdutils.error = function (data) {
	let url = `//host.com/report?key1=error&name=${data.name}&message=${data.message}`;
	let img = new Image();
	img.src = url;
}
```

类似于上面的这种设置，万一在使用过程中，出现异常，因为这里的上报，可以让你迅速的排查解决问题；
而且，该错误上报，是一个全局的上报，所以你新增的一些方法，也无需专门调用该错误上报；
让你放心使用；

## 支持的API

- [isArray](./docs/isArray.md): (v:`1.0.0`) 判断是否为数组类型
- [isBoolean](./docs/isBoolean.md): (v:`1.0.0`) 判断是否为布尔值类型
- [isDate](./docs/isDate.md): (v:`1.0.0`) 判断是否为Date类型
- [isError](./docs/isError.md): (v:`1.0.0`) 判断是否为Error对象
- [isFunction](./docs/isFunction.md): (v:`1.0.0`) 判断是否为函数
- [isLeapYear](./docs/isLeapYear.md): (v:`1.0.0`) 判断是否为闰年
- [isNumber](./docs/isNumber.md): (v:`1.0.0`) 判断是否为数字类型
- [isObject](./docs/isObject.md): (v:`1.0.0`) 判断是否为对象类型
- [isRegExp](./docs/isRegExp.md): (v:`1.0.0`) 判断是否为正则类型
- [isString](./docs/isString.md): (v:`1.0.0`) 判断是否为字符串类型
- [colorRandom](./docs/colorRandom.md): (v:`1.0.0`) 生成一个随机的颜色
- [hexToRgb](./docs/hexToRgb.md): (v:`1.0.0`) 根据hex的值，生成rgb格式的值，支持hex8 -> rgba
- [rgbToHex](./docs/rgbToHex.md): (v:`1.0.0`) 根据rgb格式的值，生成hex格式的颜色值，支持rgba -> hex8
- [debounce](./docs/debounce.md): (v:`1.0.0`) 函数防抖，只触发最后一次调用；
- [throttle](./docs/throttle.md): (v:`1.0.0`) 函数节流，一定时间内，只执行一次回调函数
- [numberFormat](./docs/numberFormat.md): (v:`1.0.0`) 把数字字符串进行分割，支持字符串类型的数字
- [deepClone](./docs/deepClone.md): (v:`1.0.0`) 深copy，如果不是对象，则直接返回
- [objectToString](./docs/objectToString.md): (v:`1.0.0`) 把规定格式的Object转换为String格式
- [xssDecode](./docs/xssDecode.md): (v:`1.0.0`) 进行XSS解码，与xssEncode配合使用
- [xssEncode](./docs/xssEncode.md): (v:`1.0.0`) 进行XSS编码，与xssDecode配合使用
- [stringToObject](./docs/stringToObject.md): (v:`1.0.0`) 把规定格式的Str转换为Object格式
- [dateFormat](./docs/dateFormat.md): (v:`1.0.0`) 转换为指定格式的时间
- [dateNature](./docs/dateNature.md): (v:`1.0.0`) 根据传入的日期，转换出一些指定的节日信息
- [preciseCountDownTimer](./docs/preciseCountDownTimer.md): (v:`1.0.0`) 倒计时的插件


