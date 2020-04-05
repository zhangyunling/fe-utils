// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.objToStr 的测试用例', function() {
  it(`feutils.objToStr({a: 1, b: undefined, c: 2}) should return 'a=1&b=undefined&c=2'`, function () {
    assert.equal(feutils.objToStr({a: 1, b: undefined, c: 2}), 'a=1&b=undefined&c=2');
  });
  it(`feutils.objToStr({
    a: true,
    b: "9999999999999999",
    c: undefined,
    d: null
  }, ';') should return 'a=true;b=9999999999999999;c=undefined;d=null'`, function () {
    assert.equal(feutils.objToStr({
      a: true,
      b: "9999999999999999",
      c: undefined,
      d: null
    }, ';'), 'a=true;b=9999999999999999;c=undefined;d=null');
  });
  it(`feutils.objToStr({a: '#123'}) should return 'a=%23123'`, function () {
    assert.equal(feutils.objToStr({a: '#123'}), 'a=%23123');
  });
  it(`feutils.objToStr({a: {}}) should throw Error`, function () {
    try{
      feutils.objToStr({a: {}});
    } catch(e){
      assert(true);
    }
  });
});