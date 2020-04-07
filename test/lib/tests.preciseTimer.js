// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.preciseTimer 的测试用例', function() {
  it(`feutils.preciseTimer({
      distTime : "2019/05/01 21:38:00",
      curTime : "2019/05/01 21:37:51",
      callback : function(data){
        _data = data;
      }
    }) should return '00天00时00分07秒'`, function (done) {
    let _data = null;
    let obj = feutils.preciseTimer({
      distTime : "2019/05/01 21:38:00",
      curTime : "2019/05/01 21:37:51",
      callback : function(data){
        _data = data;
      }
    });

    setTimeout(function(){
      obj.clear();
      let arr = _data.arr;
      let cur = arr[0]+'天'+arr[1]+'时'+arr[2]+'分'+arr[3]+'秒';
      assert.equal(cur, '00天00时00分07秒')
      done();
    }, 1000);
  });

  it(`feutils.preciseTimer({
        distTime : "111",
        curTime : "2019/05/01 21:37:51",
        callback : function(data){}
      }) should be error`, function () {
    try {
      feutils.preciseTimer({
        distTime : "111",
        curTime : "2019/05/01 21:37:51",
        callback : function(data){}
      });
    } catch(e) {
      assert(1);
    }
  });
});