// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.objectToString 的测试用例', function() {
  it(`FEUtils.objectToString({a: 1, b: undefined, c: 2}) should return 'a=1&b=undefined&c=2'`, function () {
    assert.equal(FEUtils.objectToString({a: 1, b: undefined, c: 2}), 'a=1&b=undefined&c=2');
  });
  it(`FEUtils.objectToString({
    a: true,
    b: "9999999999999999",
    c: undefined,
    d: null
  }, ';') should return 'a=true;b=9999999999999999;c=undefined;d=null'`, function () {
    assert.equal(FEUtils.objectToString({
      a: true,
      b: "9999999999999999",
      c: undefined,
      d: null
    }, ';'), 'a=true;b=9999999999999999;c=undefined;d=null');
  });
  it(`FEUtils.objectToString({a: '#123'}) should return 'a=%23123'`, function () {
    assert.equal(FEUtils.objectToString({a: '#123'}), 'a=%23123');
  });
  it(`FEUtils.objectToString({a: {}}) should throw Error`, function () {
    try{
      FEUtils.objectToString({a: {}});
    } catch(e){
      assert(true);
    }
  });
});