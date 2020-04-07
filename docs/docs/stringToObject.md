## strToObj

> 把规定格式的Str转换为Object格式

### 1、 调用方法

```
feutils.strToObj(str, sep);
```

参数定义：
1. str 为一个待转换的字符串
2. sep转换对象后的间隔符，默认为：'&'

返回值（Object）：
1. 使用分隔符进行分割，组成的对象；

转换规则：
1. 格式必须为：key=value{sep}key=value格式（默认sep的话，就是search参数格式）；
2. key不存在时，会认为出错，抛出错误，转换失败
3. undefined，null，true，false的字符串，会被转换为对应的类型；
4. Number类型的，如果长度小于15，则会被转换为Number类型；
5. 其他字符串，会被decodeURIComponent一下；

demo示例：

```
feutils.strToObj('a=1&b&c=2')
// {a: 1, b: undefined, c: 2}

feutils.strToObj('a=true;b=9999999999999999;c=undefined;d=null', ';')
// {
//   a: true,
//   b: "9999999999999999",
//   c: undefined,
//   d: null
// }

feutils.strToObj('a=%23123') 
// {a: '#123'}

feutils.strToObj('a=1&b=1=2')
// error

```

### 2、单元测试

单元测试：[strToObj](http://www.zhangyunling.com/study/feutils/#strToObj)