// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isObject 的测试用例', function() {
  it(`fdutils.isObject({}) should return true`, function () {
    assert(fdutils.isObject({}))
  });
  it(`fdutils.isObject(new Object()) should return true`, function () {
    assert(fdutils.isObject(new Object()))
  });
  it(`fdutils.isObject([]) should return false`, function () {
    assert.notEqual(fdutils.isObject([]), true);
  });
  it(`fdutils.isObject(null) should return false`, function () {
    assert.notEqual(fdutils.isObject(null), true);
  });
});