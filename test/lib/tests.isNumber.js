// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isNumber 的测试用例', function() {
  it(`fdutils.isNumber(1) should return true`, function () {
    assert(fdutils.isNumber(1))
  });
  it(`fdutils.isNumber(NaN) should return true`, function () {
    assert(fdutils.isNumber(NaN))
  });
  it(`fdutils.isNumber('123') should return false`, function () {
    assert.notEqual(fdutils.isNumber('123'), true);
  });
});