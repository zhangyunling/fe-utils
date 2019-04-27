// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.numberFormat 的测试用例', function() {
  it(`FEUtils.numberFormat({number: 1234567}) should return '1,234,567'`, function () {
    assert.equal(FEUtils.numberFormat({number: 1234567}), '1,234,567')
  });
  it(`FEUtils.numberFormat({number: '-123456'}) should return '-123,456'`, function () {
    assert.equal(FEUtils.numberFormat({number: '-123456'}), '-123,456')
  });
  it(`FEUtils.numberFormat({number: '-0'}) should return '-0'`, function () {
    assert.equal(FEUtils.numberFormat({number: '-0'}), '-0')
  });
  it(`FEUtils.numberFormat({number: '123a'}) should be error`, function () {
    try {
      FEUtils.numberFormat({number: '123a'});
    } catch(e) {
      assert(1);
    }
  });
});