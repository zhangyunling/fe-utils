/**
 * eslint的动态设置
 * 比如：线上打包，不支持遗留console.log这样的字样；
 * 参考 https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
 */
const isPro = process.argv.join('').indexOf('prod') !== -1;
const proRules = {};

// 线上打包时，修改一些默认的设置；
if (isPro) {
  Object.assign(proRules, {
    "no-console": 2,
  });
  console.info('\n打包线上，eslint限制有修改；');
}

module.exports = {
    root: true, // 指定跟路径
    parserOptions: {
        parser: 'babel-eslint' // 解析器
    },
    "parser": '@typescript-eslint/parser',
    "plugins": [
        '@typescript-eslint'
    ],
    env: {
        browser: true, // 浏览器启用
        es6: true, // es6启用
        node: true, // node环境
    },
    extends: [
        'standard' // js标准规则
        // https://standardjs.com/rules-zhcn.html#javascript-standard-style
    ],
    // add your custom rules here
    rules: Object.assign({
        'indent': ['error', 2], // 缩进宽度4个空格
        'comma-dangle': 'off', // 允许行末逗号
        'no-constant-condition': 'off', // 允许常量作为表达式条件
        'no-delete-var': 'off', // 允许使用delete
        'no-extend-native': 'off', // 允许扩展原生对象
        'no-floating-decimal': 'off', //  允许省去小数点前的0
        'no-multi-str': 'off', // 允许多行字符串
        semi: 'off', // 允许使用分号
        'no-useless-constructor': 'off', // 允许简单构造函数
        'no-undef': 'off', // 允许未定义使用变量
        eqeqeq: 'off', // 允许使用==
        'no-unused-vars': 'off', // 允许

        // allow async-await
        'generator-star-spacing': 'off', // 关闭
        // 最大长度 120
        'max-len': [
            'warn',
            {
                code: 240,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true
            }
        ],
        // 最大行数 500
        'max-lines': [
            'warn',
            {
                max: 500,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        // 要求使用 let 或 const 而不是 var
        'no-var': ['error'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }, proRules)
};