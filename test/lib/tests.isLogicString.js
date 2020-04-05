// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isLogicString 的测试用例', function() {
  it(`feutils.isLogicString('a') should return true`, function () {
    assert(feutils.isLogicString('a'))
  });
  it(`feutils.isLogicString('a && b') should return true`, function () {
    assert(feutils.isLogicString('a && b'))
  });
  let a = 1;
  it(`feutils.isLogicString('b && (c && d || e)') should return true`, function () {
    assert(feutils.isLogicString('b && (c && d || e)'))
  });
  it(`feutils.isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))') should return true`, function () {
    assert(feutils.isLogicString('a && bb && (c && d || e) && (f && (g || (h && i)))'), true);
  });
  it(`feutils.isLogicString('a && b && (c && d || e) &&') should return false`, function () {
    assert.notEqual(feutils.isLogicString('a && b && (c && d || e) &&'), true);
  });
});