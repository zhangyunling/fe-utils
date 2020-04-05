// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.dateFormat 的测试用例', function() {
  it(`feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: '2019-04-27 18:59'
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: '2019-04-27 18:59'
    }), '2019/04/27 18:59');
  });

  it(`feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740000
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740000
    }), '2019/04/27 18:59');
  });

  it(`feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740
    }), '2019/04/27 18:59');
  });

  it(`feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: new Date('2019-04-27 18:59')
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: new Date('2019-04-27 18:59')
    }), '2019/04/27 18:59');
  });

  it(`feutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 'asd'
    }) should return 'error'`, function () {
    try{
    	feutils.dateFormat({
	    	format: 'yyyy/mm/dd hh:ii',
	    	date: 'asd'
	    });
    }catch(e){
    	assert(1)
    }
  });
});