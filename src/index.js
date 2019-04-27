/**
 * @desc webpack打包入口
 */
let moduleExports = {};

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);

r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));

  // '_'开头的认为是私有函数或者方法；
  if (attr.indexOf('_') !== 0) {
  	moduleExports[attr] = r(key);
  }
});

module.exports = moduleExports;