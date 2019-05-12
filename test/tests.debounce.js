// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.debounce 的测试用例', function() {
	// 间隔执行；
	it(`fdutils.debounce(fn, 100) should return true`, function (done) {
  	var num = 0;
  	var fn = fdutils.debounce(function(){
			num++;
			assert(num === 1)
	    done();
		}, 100);

  	fn();
    setTimeout(fn, 50);
    setTimeout(fn, 100);
  });
  // 触发的强制执行；
  it(`fdutils.debounce(fn, 100, 150) should return true`, function (done) {
  	var num = 0;
  	var fn = fdutils.debounce(function(){
			num++;
			assert(num === 1)
      done();
		}, 100, 150);

  	fn();
    setTimeout(fn, 60);
    setTimeout(fn, 120);
    setTimeout(fn, 170);
  });
});