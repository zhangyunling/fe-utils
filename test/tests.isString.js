// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isString 的测试用例', function() {
  it(`feutils.isString('') should return true`, function () {
    assert(feutils.isString(''))
  });
  it(`feutils.isString(new String('1')) should return true`, function () {
    assert(feutils.isString(new String('1')))
  });
  let a = 1;
  it(`feutils.isString(1.toString()) should return true`, function () {
    assert(feutils.isString(a.toString()))
  });
  it(`feutils.isString(123) should return false`, function () {
    assert.notEqual(feutils.isString(123), true);
  });
});