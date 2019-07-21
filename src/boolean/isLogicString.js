/**
 * @method isLogicString
 * @since version 1.0.5
 * @desc 判断字符串是否为一个合法的逻辑表达式
 * @param {String} str 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isLogicString(value);
 */

let checkType = require('../_utils/_type');
let logicReg = /^[a-zA-Z0-9]+((&&|\|\|)[a-zA-Z0-9]+)*$/;

var isLogicString = function(s) {
	// 判断 s 是否为空，或者字符串；
	if (!s || checkType(s) !== 'string') {
		return false;
	}

  let arr = [];
  let i = 0;
  let sLen = s.length;
  let v = '';
  let logicStr = ''; // 不带括号的逻辑表达式
  let v3 = '';

  while (i < sLen){
      v = s[i];
      logicStr = '';

      // 如果等于 ) ，则找出这个小括号的内容
      if (v === ')') {
          // 括号不匹配，判断失败
          if (!arr.length) {
              return false;
          }

          v3 = arr.pop();
          // 把这个小括号的
          while (v3 !== '(') {
              logicStr = v3 + logicStr;

              // 数组为空时，还没有找到 ( 括号，
              // 也属于括号不匹配，直接返回false
              if (!arr.length) {
                  return false;
              }

              v3 = arr.pop();
          }

          // 判断v2 是否为一个合法的，不含有括号的逻辑表达式；
          if (!logicStr || !logicReg.test(logicStr)) {
              return false;
          } else {
              // 给arr 推入一个占位符，代替当前的一个小括号内容；
              arr.push('a');
          }
      } else if (v !== ' ') {
          // 不等于空格时，推入到数组中
          arr.push(v);
      }

      i++;
  }

  logicStr = arr.join('');
  // 执行到最后，如果arr依然不为空，则判断，是否为一个合法的
  // 不包含括号的逻辑表达式
  if (logicStr && !logicReg.test(logicStr)) {
      return false
  }
  
  return true;
};

module.exports = isLogicString;