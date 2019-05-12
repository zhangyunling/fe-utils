// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.dateFormat 的测试用例', function() {
  it(`fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: '2019-04-27 18:59'
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: '2019-04-27 18:59'
    }), '2019/04/27 18:59');
  });

  it(`fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740000
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740000
    }), '2019/04/27 18:59');
  });

  it(`fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 1556362740
    }), '2019/04/27 18:59');
  });

  it(`fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: new Date('2019-04-27 18:59')
    }) should return '2019/04/27 18:59'`, function () {
    assert.equal(fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: new Date('2019-04-27 18:59')
    }), '2019/04/27 18:59');
  });

  it(`fdutils.dateFormat({
    	format: 'yyyy/mm/dd hh:ii',
    	date: 'asd'
    }) should return 'error'`, function () {
    try{
    	fdutils.dateFormat({
	    	format: 'yyyy/mm/dd hh:ii',
	    	date: 'asd'
	    });
    }catch(e){
    	assert(1)
    }
  });
});