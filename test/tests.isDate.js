// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.isDate 的测试用例', function() {
  it(`FEUtils.isDate(new Date()) should return true`, function () {
    assert(FEUtils.isDate(new Date()))
  });
  it(`FEUtils.isDate(Date.now()) should return false`, function () {
    assert(!FEUtils.isDate(Date.now()))
  });
});