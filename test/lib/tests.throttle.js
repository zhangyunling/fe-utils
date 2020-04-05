// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.throttle 的测试用例', function() {
	it(`feutils.throttle(fn, 100, false) should return true`, function (done) {
  	var num = 0;
  	var fn = feutils.throttle(function(){
			num++;
			assert(num === 1)
      done();
		}, 100);

    let interval = setInterval(fn, 20);

    setTimeout(function () {
      clearInterval(interval)
    }, 90);
  });
  it(`feutils.throttle(fn, 100, true) should return true`, function (done) {
  	var num = 0;
  	var fn = feutils.throttle(function(){
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