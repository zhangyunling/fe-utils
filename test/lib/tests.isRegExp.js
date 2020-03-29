// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isRegExp 的测试用例', function() {
  it(`fdutils.isRegExp(/a/g) should return true`, function () {
    assert(fdutils.isRegExp(/a/g))
  });
  it(`fdutils.isRegExp(new RegExp(1)) should return true`, function () {
    assert(fdutils.isRegExp(new RegExp(1)))
  });
  it(`fdutils.isRegExp({}) should return false`, function () {
    assert.notEqual(fdutils.isRegExp({}), true);
  });
});