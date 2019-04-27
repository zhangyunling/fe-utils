// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isString 的测试用例', function() {
  it(`FEUtils.isString('') should return true`, function () {
    assert(FEUtils.isString(''))
  });
  it(`FEUtils.isString(new String('1')) should return true`, function () {
    assert(FEUtils.isString(new String('1')))
  });
  let a = 1;
  it(`FEUtils.isString(1.toString()) should return true`, function () {
    assert(FEUtils.isString(a.toString()))
  });
  it(`FEUtils.isString(123) should return false`, function () {
    assert.notEqual(FEUtils.isString(123), true);
  });
});