// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isError 的测试用例', function() {
  it(`fdutils.isError(new Error('1')) should return true`, function () {
    assert(fdutils.isError(new Error('1')))
  });
  it(`fdutils.isError(new TypeError('1')) should return true`, function () {
    assert(fdutils.isError(new TypeError('1')))
  });
  it(`fdutils.isError(null) should return false`, function () {
    assert.notEqual(fdutils.isError(null), true);
  });
});