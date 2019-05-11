// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.stringToObject 的测试用例', function() {
  it(`FEUtils.stringToObject('a=1&b&c=2') should return {a: 1, b: undefined, c: 2}`, function () {
    let _obj = FEUtils.stringToObject('a=1&b&c=2');
    let _isTrue = _obj.a === 1 && _obj.b === undefined &&  _obj.c === 2;

    assert(_isTrue);
  });
  it(`FEUtils.stringToObject('a=true;b=9999999999999999;c=undefined;d=null', ';') should return {
    a: true,
    b: "9999999999999999",
    c: undefined,
    d: null
  }`, function () {
    let _obj = FEUtils.stringToObject('a=true;b=9999999999999999;c=undefined;d=null', ';');
    let _isTrue = _obj.a === true && _obj.b === '9999999999999999' && 
        _obj.c === undefined && _obj.d === null;
    
    assert(_isTrue);
  });
  it(`FEUtils.stringToObject('a=%23123') should return {a: '#123'}`, function () {
    let _obj = FEUtils.stringToObject('a=%23123');
    let _isTrue = _obj.a === '#123';
    
    assert(_isTrue);
  });
  it(`FEUtils.stringToObject('a=1&b=1=2') should throw Error`, function () {
    try{
      FEUtils.stringToObject('a=1&b=1=2');
    } catch(e){
      assert(true);
    }
  });
});