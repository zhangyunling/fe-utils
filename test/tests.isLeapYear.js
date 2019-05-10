// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isLeapYear 的测试用例', function() {
  it(`FEUtils.isLeapYear(2000) should return true`, function () {
    assert(FEUtils.isLeapYear(2000))
  });
  it(`FEUtils.isLeapYear(2012) should return true`, function () {
    assert(FEUtils.isLeapYear(2012))
  });
  it(`FEUtils.isLeapYear(2019) should return false`, function () {
    assert.notEqual(FEUtils.isLeapYear(2019), true);
  });
  it(`FEUtils.isLeapYear(2020) should return true`, function () {
    assert(FEUtils.isLeapYear(2020))
  });
});