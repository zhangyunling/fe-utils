// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.hexToRgb 的测试用例', function() {
	it(`FEUtils.hexToRgb('#000000') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(FEUtils.hexToRgb('#000000'), 'rgb(0,0,0)');
  });
  it(`FEUtils.hexToRgb('#000000ff') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(FEUtils.hexToRgb('#000000ff'), 'rgb(0,0,0)');
  });
  it(`FEUtils.hexToRgb('#c36e6e96') should return 'rgba(195,110,110,0.59)'`, function () {
  	assert.equal(FEUtils.hexToRgb('#c36e6e96'), 'rgba(195,110,110,0.59)');
  });
  it(`FEUtils.hexToRgb('#c3') should throw an error`, function () {
  	try{
  		FEUtils.hexToRgb('#c3');
  	} catch(e){
  		assert(true);
  	}
  });
});