// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isFunction 的测试用例', function() {
	function fn(){}
  it(`FEUtils.isFunction(fn) should return true`, function () {
    assert(FEUtils.isFunction(fn))
  });
  it(`FEUtils.isFunction(null) should return false`, function () {
    assert.notEqual(FEUtils.isFunction(null), true);
  });
});