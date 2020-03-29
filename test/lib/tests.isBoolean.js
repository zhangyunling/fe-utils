// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isBoolean 的测试用例', function() {
  it(`fdutils.isBoolean(true) should return true`, function () {
    assert(fdutils.isBoolean(true))
  });
  it(`fdutils.isBoolean(null) should return false`, function () {
    assert.notEqual(fdutils.isBoolean(null), true);
  });
  it(`fdutils.isBoolean(1) should return false`, function () {
    assert.notEqual(fdutils.isBoolean(1), true);
  });
});