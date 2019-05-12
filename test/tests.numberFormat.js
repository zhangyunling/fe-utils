// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.numberFormat 的测试用例', function() {
  it(`fdutils.numberFormat({number: 1234567}) should return '1,234,567'`, function () {
    assert.equal(fdutils.numberFormat({number: 1234567}), '1,234,567')
  });
  it(`fdutils.numberFormat({number: '-123456'}) should return '-123,456'`, function () {
    assert.equal(fdutils.numberFormat({number: '-123456'}), '-123,456')
  });
  it(`fdutils.numberFormat({number: '-0'}) should return '-0'`, function () {
    assert.equal(fdutils.numberFormat({number: '-0'}), '-0')
  });
  it(`fdutils.numberFormat({number: '123a'}) should be error`, function () {
    try {
      fdutils.numberFormat({number: '123a'});
    } catch(e) {
      assert(1);
    }
  });
});