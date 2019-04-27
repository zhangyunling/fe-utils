// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isArray 的测试用例', function() {
  it(`FEUtils.isArray([]) should return true`, function () {
    assert(FEUtils.isArray([]))
  });
  it(`FEUtils.isArray(new Array()) should return true`, function () {
    assert(FEUtils.isArray(new Array()))
  });
  it(`FEUtils.isArray(null) should return false`, function () {
    assert.notEqual(FEUtils.isArray(null), true);
  });
});