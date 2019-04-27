// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.xssDecode 的测试用例', function() {
  it(`FEUtils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;') should return '&<"\'  '`, function () {
    assert.equal(FEUtils.xssDecode('&amp;&lt;&quot;&#39;&nbsp;&nbsp;'), '&<"\'  ');
  });
});