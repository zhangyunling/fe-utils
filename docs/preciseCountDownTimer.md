## preciseCountDownTimer

> 倒计时的插件，解决当浏览器进入后台时，计时器函数变慢的问题；

### 1、 调用方法

```
fdutils.preciseCountDownTimer(options);
```

参数定义：
1. options 计时器的入参对象，包含三个参数
2. options.distTime 倒计时截止时间，有效的时间（时间戳，时间字符串，Date实例）
3. options.curTime 当前时间，其实也是服务器时间（时间戳，时间字符串，Date实例）
4. options.callback 倒计时之后的回调函数（必须）

返回值：
1. timer，如果外部需要停止计时器，可以通过：clearTimeout(timer)清理；

callback函数，会传入一个对象参数，参数包含以下属性
```
{
  "day":"07",        // 距离倒计时结束，剩余的 天数
  "hour":"08",       // 距离倒计时结束，剩余的 小时
  "min":18,          // 距离倒计时结束，剩余的 分钟
  "secs":57,         // 距离倒计时结束，剩余的 秒数
  "msecs":634737985  // 距离倒计时结束，剩余的 毫秒
  "arr": ["07","08","18","57"] // 倒计时计算成 天、时、分、秒的数组，长度为4
}
```

demo示例：

```
let obj = fdutils.preciseCountDownTimer({
  distTime : "2019/05/01 21:38:00",
  curTime : "2019/05/01 21:37:51",
  callback : function(data){
    console.log(data);
  }
});

```

### 2、单元测试

单元测试：[preciseCountDownTimer](http://www.zhangyunling.com/study/fdutils/#preciseCountDownTimer)