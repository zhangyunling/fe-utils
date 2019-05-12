// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isObject 的测试用例', function() {
  it(`feutils.isObject({}) should return true`, function () {
    assert(feutils.isObject({}))
  });
  it(`feutils.isObject(new Object()) should return true`, function () {
    assert(feutils.isObject(new Object()))
  });
  it(`feutils.isObject([]) should return false`, function () {
    assert.notEqual(feutils.isObject([]), true);
  });
  it(`feutils.isObject(null) should return false`, function () {
    assert.notEqual(feutils.isObject(null), true);
  });
});