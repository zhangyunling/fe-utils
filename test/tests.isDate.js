// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.isDate 的测试用例', function() {
  it(`fdutils.isDate(new Date()) should return true`, function () {
    assert(fdutils.isDate(new Date()))
  });
  it(`fdutils.isDate(Date.now()) should return false`, function () {
    assert(!fdutils.isDate(Date.now()))
  });
});