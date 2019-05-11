// FEUtils必须使用var定义，不然浏览器端和Node端不能同时处理
var FEUtils = require('./asserts/FEUtils.js');
var {assert , expect} = require('chai');

describe('FEUtils.dateNature 的测试用例', function() {
  it(`FEUtils.dateNature('2019/01/01') should be '元旦'`, function () {
    let _date = FEUtils.dateNature('2019/01/01');
    assert.equal(_date.festival.solar, '元旦');
  });

  it(`FEUtils.dateNature('2019/03/08') should be '妇女节'`, function () {
    let _date = FEUtils.dateNature('2019/03/08');
    assert.equal(_date.festival.solar, '妇女节');
  });

  it(`FEUtils.dateNature('2019/02/05') should be '春节'`, function () {
    let _date = FEUtils.dateNature('2019/02/05');
    assert.equal(_date.festival.lunar, '春节');
  });

  it(`FEUtils.dateNature('2019/08/07') should be '七夕情人节'`, function () {
    let _date = FEUtils.dateNature('2019/08/07');
    assert.equal(_date.festival.lunar, '七夕情人节');
  });

  it(`FEUtils.dateNature('2019/05/12') should be '母亲节'`, function () {
    let _date = FEUtils.dateNature('2019/05/12');
    assert.equal(_date.festival.week, '母亲节');
  });

  it(`FEUtils.dateNature('2019/06/16') should be '父亲节'`, function () {
    let _date = FEUtils.dateNature('2019/06/16');
    assert.equal(_date.festival.week, '父亲节');
  });

  it(`FEUtils.dateNature('2020/05/05') should be '立夏'`, function () {
    let _date = FEUtils.dateNature('2020/05/05');
    assert.equal(_date.solarTerms, '立夏');
  });

  // 2020年 闰四月
  // 2020/06/12 -> 2020/04/21 (阳历转农历)
  it(`FEUtils.dateNature('2020/06/12') should be '闰四月 4/21'`, function () {
    let _date = FEUtils.dateNature('2020/06/12');
    let _lunar = _date.lunar;
    let _result = _lunar.isLeap && _lunar.leap === 4 && _lunar.month == 4 && _lunar.day == 21;

    assert(_result);
  });

  // 2019年04月21日 复活节
  it(`FEUtils.dateNature('2019/04/21') should be '复活节'`, function () {
    let _date = FEUtils.dateNature('2019/04/21');
    assert.equal(_date.festival.estDay, '复活节');
  });
  
});