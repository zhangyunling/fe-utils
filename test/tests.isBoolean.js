// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isBoolean 的测试用例', function() {
  it(`feutils.isBoolean(true) should return true`, function () {
    assert(feutils.isBoolean(true))
  });
  it(`feutils.isBoolean(null) should return false`, function () {
    assert.notEqual(feutils.isBoolean(null), true);
  });
  it(`feutils.isBoolean(1) should return false`, function () {
    assert.notEqual(feutils.isBoolean(1), true);
  });
});