// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isNumber 的测试用例', function() {
  it(`feutils.isNumber(1) should return true`, function () {
    assert(feutils.isNumber(1))
  });
  it(`feutils.isNumber(NaN) should return true`, function () {
    assert(feutils.isNumber(NaN))
  });
  it(`feutils.isNumber('123') should return false`, function () {
    assert.notEqual(feutils.isNumber('123'), true);
  });
});