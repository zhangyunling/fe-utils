// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.colorRandom 的测试用例', function() {
	it(`fdutils.colorRandom() should return an random hex color`, function () {
  	let _romdomColor = fdutils.colorRandom();
    assert(/^#[0-9a-fA-F]{6}$/.test(_romdomColor));
  });
});