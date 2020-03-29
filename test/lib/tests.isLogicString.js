// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isLogicString 的测试用例', function() {
  it(`fdutils.isLogicString('a') should return true`, function () {
    assert(fdutils.isLogicString('a'))
  });
  it(`fdutils.isLogicString('a && b') should return true`, function () {
    assert(fdutils.isLogicString('a && b'))
  });
  let a = 1;
  it(`fdutils.isLogicString('b && (c && d || e)') should return true`, function () {
    assert(fdutils.isLogicString('b && (c && d || e)'))
  });
  it(`fdutils.isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))') should return true`, function () {
    assert(fdutils.isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))'), true);
  });
  it(`fdutils.isLogicString('a && b && (c && d || e) &&') should return false`, function () {
    assert.notEqual(fdutils.isLogicString('a && b && (c && d || e) &&'), true);
  });
});