
## lib-tmp
> 一个支持typescript的类库，适合于用于一些工具仓库；

### 支持性：
1. typescript [官方文档](https://www.tslang.cn/docs/handbook/basic-types.html)，[其他文档](https://ts.xcatliu.com/basics)
2. es6
3. docs 文档
4. eslint 语法检测
5. commitlint 提交规范
6. mocha 单元测试；
7. 支持分文件打包，和直接webpack打包；

### 开发文档

#### 安装

```
npm i 
```

#### 开发模式

```
npm run dev
```

开发调试：

[http://localhost:8088/](http://localhost:8088/)

[http://127.0.0.1:8088/](http://127.0.0.1:8088/)

[http://{你的ip}:8088/](http://{你的ip}:8088/)

#### 编译项目
> 编译后的代码，会在 根目录的 `dist` 目录
```
npm run build:prd  // webpack打包，打包目录在dist目录
npm run build:ts   // ts打包，打包目录在lib；
npm run build      // 同时执行上述两个打包
```

#### 其他依赖

##### pre-commit 
> 增加`git commit`前的钩子，来做一些限制；

目前只有两个限制：
1. `commit` 前会再次验证`eslint`；
2. `commit` 前会限制提交信息规范；

commit 的提交类型主要包含以下几种：
1. feat ： 新增功能；
2. fix： BUG修复；
3. docs：修改文档；
4. style：样式修改；
5. refactor：代码重构，比如重构某个组件；
6. perf：提升性能的改动
7. test：单元测试修改；
8. workflow： 工作流相关修改
9. chore：构建过程，依赖库，辅助工具等相关；
10. revert：回滚
11. delete：删除代码；
11. merge：合并分支，解决冲突时；

所以，按照这个类型，当你commit的时候，你需要需要提交的内容如下：

> 以`feat`为例：

```
git commit -m "feat: 描述信息"
git commit -m "feat(信息): 描述信息"
```

