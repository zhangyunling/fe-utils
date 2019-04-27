// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isObject 的测试用例', function() {
  it(`FEUtils.isObject({}) should return true`, function () {
    assert(FEUtils.isObject({}))
  });
  it(`FEUtils.isObject(new Object()) should return true`, function () {
    assert(FEUtils.isObject(new Object()))
  });
  it(`FEUtils.isObject([]) should return false`, function () {
    assert.notEqual(FEUtils.isObject([]), true);
  });
  it(`FEUtils.isObject(null) should return false`, function () {
    assert.notEqual(FEUtils.isObject(null), true);
  });
});