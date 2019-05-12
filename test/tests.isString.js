// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isString 的测试用例', function() {
  it(`fdutils.isString('') should return true`, function () {
    assert(fdutils.isString(''))
  });
  it(`fdutils.isString(new String('1')) should return true`, function () {
    assert(fdutils.isString(new String('1')))
  });
  let a = 1;
  it(`fdutils.isString(1.toString()) should return true`, function () {
    assert(fdutils.isString(a.toString()))
  });
  it(`fdutils.isString(123) should return false`, function () {
    assert.notEqual(fdutils.isString(123), true);
  });
});