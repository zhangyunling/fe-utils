// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.throttle 的测试用例', function() {
	it(`fdutils.throttle(fn, 100, false) should return true`, function (done) {
  	var num = 0;
  	var fn = fdutils.throttle(function(){
			num++;
			assert(num === 1)
      done();
		}, 100);

    let interval = setInterval(fn, 20);

    setTimeout(function () {
      clearInterval(interval)
    }, 90);
  });
  it(`fdutils.throttle(fn, 100, true) should return true`, function (done) {
  	var num = 0;
  	var fn = fdutils.throttle(function(){
			num++;
			assert(num === 1)
      done();
		}, 100, true);

    let interval = setInterval(fn, 20);

    setTimeout(function () {
      clearInterval(interval)
    }, 90);
  });
});