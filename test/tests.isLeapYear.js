// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isLeapYear 的测试用例', function() {
  it(`feutils.isLeapYear(2000) should return true`, function () {
    assert(feutils.isLeapYear(2000))
  });
  it(`feutils.isLeapYear(2012) should return true`, function () {
    assert(feutils.isLeapYear(2012))
  });
  it(`feutils.isLeapYear(2019) should return false`, function () {
    assert.notEqual(feutils.isLeapYear(2019), true);
  });
  it(`feutils.isLeapYear(2020) should return true`, function () {
    assert(feutils.isLeapYear(2020))
  });
});