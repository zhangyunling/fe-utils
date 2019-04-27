// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isNumber 的测试用例', function() {
  it(`FEUtils.isNumber(1) should return true`, function () {
    assert(FEUtils.isNumber(1))
  });
  it(`FEUtils.isNumber(NaN) should return true`, function () {
    assert(FEUtils.isNumber(NaN))
  });
  it(`FEUtils.isNumber('123') should return false`, function () {
    assert.notEqual(FEUtils.isNumber('123'), true);
  });
});