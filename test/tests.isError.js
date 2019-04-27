// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isError 的测试用例', function() {
  it(`FEUtils.isError(new Error('1')) should return true`, function () {
    assert(FEUtils.isError(new Error('1')))
  });
  it(`FEUtils.isError(new TypeError('1')) should return true`, function () {
    assert(FEUtils.isError(new TypeError('1')))
  });
  it(`FEUtils.isError(null) should return false`, function () {
    assert.notEqual(FEUtils.isError(null), true);
  });
});