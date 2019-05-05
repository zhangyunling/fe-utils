// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.rgbToHex 的测试用例', function() {
	it(`FEUtils.rgbToHex('rgb(0,0,0)') should return '#000000'`, function () {
  	assert.equal(FEUtils.rgbToHex('rgb(0,0,0)'), '#000000');
  });
  it(`FEUtils.rgbToHex('rgba(0,0,0,1)') should return '#000000ff'`, function () {
  	assert.equal(FEUtils.rgbToHex('rgba(0,0,0,1)'), '#000000ff');
  });
  it(`FEUtils.rgbToHex('rgb(195,110,110,0.59)') should return '#c36e6e96'`, function () {
  	console.log(FEUtils.rgbToHex('rgb(195,110,110,0.59)'));
  	assert.equal(FEUtils.rgbToHex('rgb(195,110,110,0.59)'), '#c36e6e96');
  });
});