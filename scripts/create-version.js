/**
 * 自动生成版本号；
 */

'use strict'
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const _now = Date.now();

function _getVersionCode(version){
	let code = 1000000;
  let arr = version.split('.');

  return code + parseInt(arr[0]) * 10000 + parseInt(arr[1]) * 100 + parseInt(arr[2]) * 1;
}

let versionTxt = `/**
 * @desc version的配置，根据package.json自动生成的；
 */
import { LibVersionTypes } from './../../types/index';

export var version: string = '${pkg.version}';
export var versionCode: number = ${_getVersionCode(pkg.version)};

export const vCfg: LibVersionTypes = {
  version,
  versionCode
}
export default vCfg;
`;

fs.writeFile(
	path.resolve(__dirname, '../src/.cache/version.ts'), 
	`${versionTxt}`,
	{flag:"w"}, 
	function(err, data){
  	if(err){
      console.log("writeFile file error");
      return false;
  	}
  	console.info('生成 .catch/version.ts，耗时：' + (Date.now() - _now)+'ms;');
});
