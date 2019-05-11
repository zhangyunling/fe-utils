module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    //禁止使用数组构造器
    "no-array-constructor": 2,
    //禁止使用arguments.caller或arguments.callee
    "no-caller": 1,
    //禁止catch子句参数与外部作用域变量同名
    "no-catch-shadow": 2,
    //禁止给类赋值
    "no-class-assign": 2,
    //禁止在条件表达式中使用赋值语句
    "no-cond-assign": 2,
    //禁止使用console
    "no-console": 1,
    //禁止修改const声明的变量
    "no-const-assign": 2,
    //禁止在条件中使用常量表达式 if(true) if(1)
    "no-constant-condition": 2,
    //不能对var声明的变量使用delete操作符
    "no-delete-var": 2,
    //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-keys": 2,
    //函数参数不能重复
    "no-dupe-args": 2,
    //switch中的case标签不能重复
    "no-duplicate-case": 2,
    //块语句中的内容不能为空
    "no-empty": 2,
    //正则表达式中的[]内容不能为空
    "no-empty-character-class": 2,
    //禁止使用空label
    "no-labels": 2,
    //禁止对null使用==或!=运算符
    "no-eq-null": 1,
    //禁止使用eval
    "no-eval": 1,
    //禁止给catch语句中的异常参数赋值
    "no-ex-assign": 2,
    //禁止扩展native对象
    "no-extend-native": 2,
    //禁止不必要的函数绑定
    "no-extra-bind": 2,
    //禁止不必要的bool转换
    "no-extra-boolean-cast": 2,
    //禁止非必要的括号
    "no-extra-parens": 0,
    //禁止多余的冒号
    "no-extra-semi": 2,
    //禁止switch穿透
    "no-fallthrough": 1,
    //禁止省略浮点数中的0 .5 3.
    "no-floating-decimal": 1,
    //禁止重复的函数声明
    "no-func-assign": 2,
    //禁止隐式转换
    "no-implicit-coercion": 1,
    //禁止使用隐式eval
    "no-implied-eval": 2,
    //禁止行内备注
    "no-inline-comments": 0,
    //禁止在块语句中使用声明（变量或函数）
    "no-inner-declarations": [2, "functions"],
    //禁止无效的正则表达式
    "no-invalid-regexp": 2,
    //禁止无效的this，只能用在构造器，类，对象字面量
    "no-invalid-this": 2,
    //不能有不规则的空格
    "no-irregular-whitespace": 2,
    //禁止使用__iterator__ 属性
    "no-iterator": 2,
    //label名不能与var声明的变量名相同
    "no-label-var": 2,
    //禁止标签声明
    "no-labels": 2,
    //禁止不必要的嵌套块
    "no-lone-blocks": 1,
    //禁止else语句内只有if语句
    "no-lonely-if": 2,
    //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-loop-func": 1,
    //声明时不能混用声明类型
    "no-mixed-requires": [0, false],
    //禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0, false],
    //换行风格
    "linebreak-style": [0, "windows"],
    //不能用多余的空格
    "no-multi-spaces": 0,
    //字符串不能用\换行
    "no-multi-str": 2,
    //空行最多不能超过2行
    "no-multiple-empty-lines": [1, {"max": 2}],
    //不能重写native对象
    "no-native-reassign": 2,
    //in 操作符的左边不能有!
    "no-negated-in-lhs": 2,
    //禁止使用嵌套的三目运算
    "no-nested-ternary": 0,
    //禁止在使用new构造一个实例后不赋值
    "no-new": 1,
    //禁止使用new Function
    "no-new-func": 1,
    //禁止使用new Object()
    "no-new-object": 2,
    //禁止使用new require
    "no-new-require": 2,
    //禁止使用new创建包装实例，new String new Boolean new Number
    "no-new-wrappers": 1,
    //不能调用内置的全局对象，比如Math() JSON()
    "no-obj-calls": 1,
    //禁止使用八进制数字
    "no-octal": 1,
    //禁止使用八进制转义序列
    "no-octal-escape": 1,
    //禁止给参数重新赋值
    "no-param-reassign": 1,
    //node中不能使用__dirname或__filename做路径拼接
    "no-path-concat": 0,
    //禁止使用++，--
    "no-plusplus": 0,
    //禁止使用process.env
    "no-process-env": 0,
    //禁止使用process.exit()
    "no-process-exit": 0,
    //禁止使用__proto__属性
    "no-proto": 1,
    //禁止重复声明变量
    "no-redeclare": 2,
    //禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-regex-spaces": 2,
    //如果禁用了指定模块，使用就会报错
    "no-restricted-modules": 0,
    //return 语句中不能有赋值表达式
    "no-return-assign": 1,
    //禁止使用javascript:void(0)
    "no-script-url": 0,
    //不能比较自身
    "no-self-compare": 1,
    //禁止使用逗号运算符
    "no-sequences": 0,
    //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow": 1,
    //严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-shadow-restricted-names": 2,
    //函数调用时 函数名与()之间不能有空格
    "no-spaced-func": 2,
    //禁止稀疏数组， [1,,2]
    "no-sparse-arrays": 2,
    //nodejs 禁止同步方法
    "no-sync": 0,
    //禁止使用三目运算符
    "no-ternary": 0,
    //一行结束后面不要有空格
    "no-trailing-spaces": 0,
    //在调用super()之前不能使用this或super
    "no-this-before-super": 0,
    //禁止抛出字面量错误 throw "error";
    "no-throw-literal": 2,
    //不能有未定义的变量
    "no-undef": 2,
    //变量初始化时不能直接给它赋值为undefined
    "no-undef-init": 2,
    //不能使用undefined
    "no-undefined": 0,
    //避免多行表达式
    "no-unexpected-multiline": 1,
    //标识符不能以_开头或结尾
    "no-underscore-dangle": 0,
    //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-unneeded-ternary": 2,
    //不能有无法执行的代码
    "no-unreachable": 2,
    //禁止无用的表达式
    "no-unused-expressions": 2,
    //不能有声明后未被使用的变量或参数
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    //未定义前不能使用
    "no-use-before-define": 2,
    //禁止不必要的call和apply
    "no-useless-call": 2,
    //禁用void操作符
    "no-void": 2,
    //禁用var，用let和const代替
    "no-var": 0,
    //不能有警告备注
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
    //禁用with
    "no-with": 2,
    //是否允许非空数组里面有多余的空格
    "array-bracket-spacing": [2, "never"],
    //箭头函数用小括号括起来
    "arrow-parens": 0,
    //=>的前/后括号
    "arrow-spacing": 0,
    //在对象中使用getter/setter
    "accessor-pairs": 0,
    //块语句中使用var
    "block-scoped-var": 1,
    //大括号风格
    "brace-style": [1, "1tbs"],
    //避免多次调用回调什么的
    "callback-return": 1,
    //强制驼峰法命名
    "camelcase": 2,
    //对象字面量项尾不能有逗号
    "comma-dangle": [0, "never"],
    //逗号前后的空格
    "comma-spacing": 0,
    //逗号风格，换行时在行首还是行尾
    "comma-style": [2, "last"],
    //循环复杂度
    "complexity": [0, 11],
    //是否允许计算后的键名什么的
    "computed-property-spacing": [0, "never"],
    //return 后面是否允许省略
    "consistent-return": 0,
    //this别名
    "consistent-this": [0, "that"],
    //非派生类不能调用super，派生类必须调用super
    "constructor-super": 0,
    //必须使用 if(){} 中的{}
    "curly": [2, "all"],
    //switch语句最后必须有default
    "default-case": 2,
    //对象访问符的位置，换行的时候在行首还是行尾
    "dot-location": 0,
    "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
    //文件以单一的换行符结束
    "eol-last": 0,
    //必须使用全等
    "eqeqeq": 2,
    //函数表达式必须有名字
    "func-names": 0,
    //函数风格，规定只能使用函数声明/函数表达式
    "func-style": [0, "declaration"],
    //生成器函数*的前后空格
    "generator-star-spacing": 0,
    //for in循环要用if语句过滤
    "guard-for-in": 0,
    //nodejs 处理错误
    "handle-callback-err": 0,
    //变量名长度
    "id-length": 0,
    //缩进风格
    "indent": [0, 2],
    //声明时必须赋初值
    "init-declarations": 0,
    //对象字面量中冒号的前后空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    //行前/行后备注
    "lines-around-comment": 0,
    //嵌套块深度
    "max-depth": [0, 4],
    //字符串最大长度
    "max-len": [0, 80, 4],
    //回调嵌套深度
    "max-nested-callbacks": [0, 2],
    //函数最多只能有3个参数
    "max-params": [0, 3],
    //函数内最多有几个声明
    "max-statements": [0, 10],
    //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-cap": 2,
    //new时必须加小括号
    "new-parens": 2,
    //变量声明后是否需要空一行
    "newline-after-var": 2,
    //大括号内是否允许不必要的空格
    "object-curly-spacing": [0, "never"],
    //强制对象字面量缩写语法
    "object-shorthand": 0,
    //连续声明
    "one-var": 0,
    //赋值运算符 += -=什么的
    "operator-assignment": [0, "always"],
    //换行时运算符在行尾还是行首
    "operator-linebreak": [2, "after"],
    //块语句内行首行尾是否要空行
    "padded-blocks": 0,
    //首选const
    "prefer-const": 0,
    //首选展开运算
    "prefer-spread": 0,
    //首选Reflect的方法
    "prefer-reflect": 0,
    //引号类型 `` "" ''
    "quotes": [1, "single"],
    //对象字面量中的属性名是否强制双引号
    "quote-props":[0, "always"],
    //parseInt必须指定第二个参数
    "radix": 2,
    //命名检测
    "id-match": 0,
    //生成器函数必须有yield
    "require-yield": 0,
    //语句强制分号结尾
    "semi": [0, "always"],
    //分号前后空格
    "semi-spacing": [0, {"before": false, "after": true}],
    //变量声明时排序
    "sort-vars": 0,
    //关键字后面是否要空一格
    "space-after-keywords": [0, "always"],
    //不以新行开始的块{前面要不要有空格
    "space-before-blocks": [0, "always"],
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": [0, "always"],
    //小括号里面要不要有空格
    "space-in-parens": [0, "never"],
    //中缀操作符周围要不要有空格
    "space-infix-ops": 0,
    //return throw case后面要不要加空格
    "keyword-spacing": 2,
    //一元运算符的前/后要不要加空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],
    //注释风格要不要有空格什么的
    "spaced-comment": 0,
    //使用严格模式
    "strict": 0,
    //禁止比较时使用NaN，只能用isNaN()
    "use-isnan": 2,
    //jsdoc规则
    "valid-jsdoc": 0,
    //必须使用合法的typeof的值
    "valid-typeof": 2,
    //var必须放在作用域顶部
    "vars-on-top": 2,
    //立即执行函数表达式的小括号风格
    "wrap-iife": [2, "inside"],
    //正则表达式字面量用小括号包起来
    "wrap-regex": 0,
    //禁止尤达条件
    "yoda": [2, "never"]
  }
};