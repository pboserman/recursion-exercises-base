const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
    return '' + obj;
  if (typeof obj === 'string')
    return '"' + obj + '"';
  if (_.isArray(obj)) {
    if (!obj[0]) {
      return '[]';
    }
    else {
      let valArr = [];
      obj.forEach(item => valArr.push(stringify(item)));
      return '[' + valArr + ']';
    }
  }
  else {
    if (_.isEmpty(obj))
      return '{}';
    else {
      let valArr = [];
      _.each(obj, (val, key) => valArr.push(stringify(key) + ':' + stringify(val)));
      return '{' + valArr + '}';
    }
  }

};


module.exports = {
  stringify: stringify
};