// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.colorRandom 的测试用例', function() {
	it(`FEUtils.colorRandom() should return an random hex color`, function () {
  	let _romdomColor = FEUtils.colorRandom();
    assert(/^#[0-9a-fA-F]{6}$/.test(_romdomColor));
  });
});