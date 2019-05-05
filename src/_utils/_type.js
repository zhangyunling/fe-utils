let typeList = [
  'Boolean', 
  'Number', 
  'String', 
  'Function', 
  'Array', 
  'RegExp', 
  'Object', 
  'Error',
  'Date'
];
let class2type = {};
let _toString = class2type.toString;

typeList.forEach(item => {
  class2type['[object ' + item + ']'] = item.toLowerCase();
});

function checkType(obj){
	if (obj === null || obj === undefined) {
		return String(obj);
	}

	return class2type[_toString.call(obj)] || 'object';
}

module.exports = checkType;