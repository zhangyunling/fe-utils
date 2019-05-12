// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.rgbToHex 的测试用例', function() {
	it(`feutils.rgbToHex('rgb(0,0,0)') should return '#000000'`, function () {
  	assert.equal(feutils.rgbToHex('rgb(0,0,0)'), '#000000');
  });
  it(`feutils.rgbToHex('rgba(0,0,0,1)') should return '#000000ff'`, function () {
  	assert.equal(feutils.rgbToHex('rgba(0,0,0,1)'), '#000000ff');
  });
  it(`feutils.rgbToHex('rgb(195,110,110,0.59)') should return '#c36e6e96'`, function () {
  	console.log(feutils.rgbToHex('rgb(195,110,110,0.59)'));
  	assert.equal(feutils.rgbToHex('rgb(195,110,110,0.59)'), '#c36e6e96');
  });
});