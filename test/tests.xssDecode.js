// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.xssDecode 的测试用例', function() {
  it(`fdutils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;') should return '&<"\'  '`, function () {
    assert.equal(fdutils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;'), '&<"\'  ');
  });
});