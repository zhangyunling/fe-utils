// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isRegExp 的测试用例', function() {
  it(`FEUtils.isRegExp(/a/g) should return true`, function () {
    assert(FEUtils.isRegExp(/a/g))
  });
  it(`FEUtils.isRegExp(new RegExp(1)) should return true`, function () {
    assert(FEUtils.isRegExp(new RegExp(1)))
  });
  it(`FEUtils.isRegExp({}) should return false`, function () {
    assert.notEqual(FEUtils.isRegExp({}), true);
  });
});