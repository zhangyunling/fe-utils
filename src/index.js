/**
 * @desc webpack打包入口
 */
let moduleExports = {};

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);

r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));

  // '_'开头的认为是私有函数或者方法；
  if (attr.indexOf('_') !== 0) {
  	let cb = r(key);

  	moduleExports[attr] = function (...args) {
  		let result = '';
  		
  		try {
  			result = cb.apply(this, args);
  		} catch (e) {
  			if (typeof this.error === 'function') {
  				this.error({
  					name: attr,
  					message: e.message
  				});
  			}
  			throw new Error(e.message);
  		}

  		return result;
  	}
  }
});

module.exports = moduleExports;