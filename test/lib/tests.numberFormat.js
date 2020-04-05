// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.numberFormat 的测试用例', function() {
  it(`feutils.numberFormat({number: 1234567}) should return '1,234,567'`, function () {
    assert.equal(feutils.numberFormat({number: 1234567}), '1,234,567')
  });
  it(`feutils.numberFormat({number: '-123456'}) should return '-123,456'`, function () {
    assert.equal(feutils.numberFormat({number: '-123456'}), '-123,456')
  });
  it(`feutils.numberFormat({number: '-0'}) should return '-0'`, function () {
    assert.equal(feutils.numberFormat({number: '-0'}), '-0')
  });
  it(`feutils.numberFormat({number: '123a'}) should be error`, function () {
    try {
      feutils.numberFormat({number: '123a'});
    } catch(e) {
      assert(1);
    }
  });
});