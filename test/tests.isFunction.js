// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isFunction 的测试用例', function() {
	function fn(){}
  it(`feutils.isFunction(fn) should return true`, function () {
    assert(feutils.isFunction(fn))
  });
  it(`feutils.isFunction(null) should return false`, function () {
    assert.notEqual(feutils.isFunction(null), true);
  });
});