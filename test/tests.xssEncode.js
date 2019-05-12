// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.xssEncode 的测试用例', function() {
  it(`feutils.xssEncode('&<"\'  ') should return '&amp;&lt;&quot;&#39;&nbsp;&nbsp;'`, function () {
    assert.equal(feutils.xssEncode('&<"\'  '), '&amp;&lt;&quot;&#39;&nbsp;&nbsp;');
  });
});