// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isArray 的测试用例', function() {
  it(`feutils.isArray([]) should return true`, function () {
    assert(feutils.isArray([]))
  });
  it(`feutils.isArray(new Array()) should return true`, function () {
    assert(feutils.isArray(new Array()))
  });
  it(`feutils.isArray(null) should return false`, function () {
    assert.notEqual(feutils.isArray(null), true);
  });
});