// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isFunction 的测试用例', function() {
	function fn(){}
  it(`fdutils.isFunction(fn) should return true`, function () {
    assert(fdutils.isFunction(fn))
  });
  it(`fdutils.isFunction(null) should return false`, function () {
    assert.notEqual(fdutils.isFunction(null), true);
  });
});