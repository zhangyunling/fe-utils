// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.isDate 的测试用例', function() {
  it(`feutils.isDate(new Date()) should return true`, function () {
    assert(feutils.isDate(new Date()))
  });
  it(`feutils.isDate(Date.now()) should return false`, function () {
    assert(!feutils.isDate(Date.now()))
  });
});