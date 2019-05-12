// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.xssEncode 的测试用例', function() {
  it(`fdutils.xssEncode('&<"\'  ') should return '&amp;&lt;&quot;&#39;&nbsp;&nbsp;'`, function () {
    assert.equal(fdutils.xssEncode('&<"\'  '), '&amp;&lt;&quot;&#39;&nbsp;&nbsp;');
  });
});