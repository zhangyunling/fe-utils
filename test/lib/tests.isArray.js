// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isArray 的测试用例', function() {
  it(`fdutils.isArray([]) should return true`, function () {
    assert(fdutils.isArray([]))
  });
  it(`fdutils.isArray(new Array()) should return true`, function () {
    assert(fdutils.isArray(new Array()))
  });
  it(`fdutils.isArray(null) should return false`, function () {
    assert.notEqual(fdutils.isArray(null), true);
  });
});