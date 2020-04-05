// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.hexToRgb 的测试用例', function() {
	it(`feutils.hexToRgb('#000000') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(feutils.hexToRgb('#000000'), 'rgb(0,0,0)');
  });
  it(`feutils.hexToRgb('#000000ff') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(feutils.hexToRgb('#000000ff'), 'rgb(0,0,0)');
  });
  it(`feutils.hexToRgb('#c36e6e96') should return 'rgba(195,110,110,0.59)'`, function () {
  	assert.equal(feutils.hexToRgb('#c36e6e96'), 'rgba(195,110,110,0.59)');
  });
  it(`feutils.hexToRgb('#c3') should throw an error`, function () {
  	try{
  		feutils.hexToRgb('#c3');
  	} catch(e){
  		assert(true);
  	}
  });
});