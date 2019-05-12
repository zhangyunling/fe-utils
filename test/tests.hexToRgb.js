// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.hexToRgb 的测试用例', function() {
	it(`fdutils.hexToRgb('#000000') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(fdutils.hexToRgb('#000000'), 'rgb(0,0,0)');
  });
  it(`fdutils.hexToRgb('#000000ff') should return 'rgb(0,0,0)'`, function () {
  	assert.equal(fdutils.hexToRgb('#000000ff'), 'rgb(0,0,0)');
  });
  it(`fdutils.hexToRgb('#c36e6e96') should return 'rgba(195,110,110,0.59)'`, function () {
  	assert.equal(fdutils.hexToRgb('#c36e6e96'), 'rgba(195,110,110,0.59)');
  });
  it(`fdutils.hexToRgb('#c3') should throw an error`, function () {
  	try{
  		fdutils.hexToRgb('#c3');
  	} catch(e){
  		assert(true);
  	}
  });
});