## deepClone

> 深copy，如果不是对象，则直接返回

### 1、 调用方法

```
fdutils.deepClone(obj);
```

参数定义：
1. obj 为一个对象，内部属性不定

返回值：
1. newObj，包含有传入参数obj的所有属性的新对象；

拷贝规则：
1. 如果属性值为：null，typeof 值不是object，则直接返回
2. Date，Array，Object对象，进行进一步遍历
3. 非Date，Array，Object的其他对象，直接返回，引用原来的属性值

demo示例：

```
fdutils.deepClone({
	number: 1234567
});
// {
//	 number: 1234567
// }

```

### 2、单元测试

单元测试：[deepClone](http://www.zhangyunling.com/study/fdutils/#deepClone)