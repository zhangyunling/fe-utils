// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.rgbToHex 的测试用例', function() {
	it(`fdutils.rgbToHex('rgb(0,0,0)') should return '#000000'`, function () {
  	assert.equal(fdutils.rgbToHex('rgb(0,0,0)'), '#000000');
  });
  it(`fdutils.rgbToHex('rgba(0,0,0,1)') should return '#000000ff'`, function () {
  	assert.equal(fdutils.rgbToHex('rgba(0,0,0,1)'), '#000000ff');
  });
  it(`fdutils.rgbToHex('rgb(195,110,110,0.59)') should return '#c36e6e96'`, function () {
  	assert.equal(fdutils.rgbToHex('rgb(195,110,110,0.59)'), '#c36e6e96');
  });
  it(`fdutils.rgbToHex('rgb(256,110,110,0.59)') should return error`, function () {
    try {
      fdutils.rgbToHex('rgb(256,110,110,0.59)')
    } catch(e) {
      assert(true);
    }
  });
  it(`fdutils.rgbToHex('rg(195,110,110,0.59)') should return error`, function () {
    try {
      fdutils.rgbToHex('rg(195,110,110,0.59)')
    } catch(e) {
      assert(true);
    }
  });
});