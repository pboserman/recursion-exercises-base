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
    return '[' + _.reduce(obj, (a, b) => a + ',' + stringify(b)) + ']';
  }
  else {
    return '{' + _.reduce(obj, (a, item, key) => a + ',' + `${key}:${stringify(item)}`) + '}';
  }

};

module.exports = {
  stringify: stringify
};