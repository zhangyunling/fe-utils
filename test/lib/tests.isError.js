// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isError 的测试用例', function() {
  it(`feutils.isError(new Error('1')) should return true`, function () {
    assert(feutils.isError(new Error('1')))
  });
  it(`feutils.isError(new TypeError('1')) should return true`, function () {
    assert(feutils.isError(new TypeError('1')))
  });
  it(`feutils.isError(null) should return false`, function () {
    assert.notEqual(feutils.isError(null), true);
  });
});