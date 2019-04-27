// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isBoolean 的测试用例', function() {
  it(`FEUtils.isBoolean(true) should return true`, function () {
    assert(FEUtils.isBoolean(true))
  });
  it(`FEUtils.isBoolean(null) should return false`, function () {
    assert.notEqual(FEUtils.isBoolean(null), true);
  });
  it(`FEUtils.isBoolean(1) should return false`, function () {
    assert.notEqual(FEUtils.isBoolean(1), true);
  });
});