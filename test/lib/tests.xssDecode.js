// feutils必须使用var定义，不然浏览器端和Node端不能同时处理
var feutils = require('./asserts/feutils.js');
var {assert , expect} = require('chai');

describe('feutils.xssDecode 的测试用例', function() {
  it(`feutils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;') should return '&<"\'  '`, function () {
    assert.equal(feutils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;'), '&<"\'  ');
  });
});