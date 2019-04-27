// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.xssEncode 的测试用例', function() {
  it(`FEUtils.xssEncode('&<"\'  ') should return '&amp;&lt;&quot;&#39;&nbsp;&nbsp;'`, function () {
    assert.equal(FEUtils.xssEncode('&<"\'  '), '&amp;&lt;&quot;&#39;&nbsp;&nbsp;');
  });
});