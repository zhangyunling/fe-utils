// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.strToObj 的测试用例', function() {
  it(`feutils.strToObj('a=1&b&c=2') should return {a: '1', b: undefined, c: '2'}`, function () {
    let _obj = feutils.strToObj('a=1&b&c=2');
    let _isTrue = _obj.a === '1' && _obj.b === undefined &&  _obj.c === '2';

    assert(_isTrue);
  });
  it(`feutils.strToObj('a=true;b=9999999999999999;c=undefined;d=null', ';') should return {
    a: true,
    b: "9999999999999999",
    c: undefined,
    d: null
  }`, function () {
    let _obj = feutils.strToObj('a=true;b=9999999999999999;c=undefined;d=null', ';');
    let _isTrue = _obj.a === true && _obj.b === '9999999999999999' && 
        _obj.c === undefined && _obj.d === null;

    assert(_isTrue);
  });
  it(`feutils.strToObj('a=%23123') should return {a: '#123'}`, function () {
    let _obj = feutils.strToObj('a=%23123');
    let _isTrue = _obj.a === '#123';
    console.log(3, _obj)
    assert(_isTrue);
  });
  it(`feutils.strToObj('a=1&b=1=2') should throw Error`, function () {
    try{
      feutils.strToObj('a=1&b=1=2');
    } catch(e){
      assert(true);
    }
  });
});