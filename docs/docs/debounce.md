## debounce

> 函数防抖，只触发最后一次调用；

### 1、 调用方法

```
feutils.debounce(callback, wait, maxWait);
```

参数定义：
1. callback 回调函数
2. wait 防抖间隔，两次间隔大于wait定义的值时，才能执行，单位是ms（默认100ms）
3. maxWait 最大等待间隔，如果一直都没有触发，那么最大间隔maxWait时，必定会触发一次（默认没有最大值）；
4. callback的内部this指向，与返回函数调用时的this有关；

返回值：
1. 返回值为一个新的函数

demo示例：

```
let _debounce = feutils.debounce(function(){
	console.log(this);
}, 100);

_debounce(); // window

```

### 2、单元测试

单元测试：[debounce](https://zhangyunling.github.io/fe-utils/test/#debounce)