// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
const {assert , expect} = require('chai');

describe('arrayEqual 的测试', function() {
    it(`FEUtils.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
        assert.notEqual(FEUtils.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
    });
    it(`FEUtils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
        assert.notEqual(FEUtils.arrayEqual([0, 2, 3], [1, 2, 3]), true)
    });
    it('FEUtils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
        assert(FEUtils.arrayEqual([1, 2, 3], [1, 2, 3]))
    });
    const arr = [8, 2, 3, 4, 7, 8]
    it(`FEUtils.arrayEqual([${arr},${arr}]) should return true`, function () {
        assert(FEUtils.arrayEqual(arr, arr))
    });
});