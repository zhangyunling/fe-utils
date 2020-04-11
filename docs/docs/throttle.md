## throttle

> 函数节流，一定时间内，只执行一次回调函数

### 1、 调用方法

```
feutils.throttle(callback, wait, immediate);
```

参数定义：
1. callback 回调函数
2. wait 节流的限制时间，单位毫秒（ms），默认100；
3. immediate 节流模式，是执行最后一次还是执行第一次，默认为false（执行最后一次）
4. callback的内部this指向，与返回函数调用时的this有关；

返回值：
1. 返回值为一个新的函数

demo示例：

```
let _throttle = feutils.throttle(function(){
	console.log(this);
}, 100);

_throttle(); // window

```

### 2、单元测试

单元测试：[throttle](https://zhangyunling.github.io/fe-utils/test/#throttle)