// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isRegExp 的测试用例', function() {
  it(`feutils.isRegExp(/a/g) should return true`, function () {
    assert(feutils.isRegExp(/a/g))
  });
  it(`feutils.isRegExp(new RegExp(1)) should return true`, function () {
    assert(feutils.isRegExp(new RegExp(1)))
  });
  it(`feutils.isRegExp({}) should return false`, function () {
    assert.notEqual(feutils.isRegExp({}), true);
  });
});