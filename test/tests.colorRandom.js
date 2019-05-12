// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.colorRandom 的测试用例', function() {
	it(`feutils.colorRandom() should return an random hex color`, function () {
  	let _romdomColor = feutils.colorRandom();
    assert(/^#[0-9a-fA-F]{6}$/.test(_romdomColor));
  });
});