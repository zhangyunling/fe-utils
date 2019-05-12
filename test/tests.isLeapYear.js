// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isLeapYear 的测试用例', function() {
  it(`fdutils.isLeapYear(2000) should return true`, function () {
    assert(fdutils.isLeapYear(2000))
  });
  it(`fdutils.isLeapYear(2012) should return true`, function () {
    assert(fdutils.isLeapYear(2012))
  });
  it(`fdutils.isLeapYear(2019) should return false`, function () {
    assert.notEqual(fdutils.isLeapYear(2019), true);
  });
  it(`fdutils.isLeapYear(2020) should return true`, function () {
    assert(fdutils.isLeapYear(2020))
  });
});