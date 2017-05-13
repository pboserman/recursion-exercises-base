const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const elArr = flattenTreeToArray(root);

  return _.filter(elArr, a => a.id === id)[0];

};

const getElementsByClassName = function(root, className) {
  // Your code here
  const elArr = flattenTreeToArray(root);

  return _.filter(elArr, (a) => {
    if (a.className) {
      return _.contains(a.className.split(' '), className);
    }
  });
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const elArr = flattenTreeToArray(root);

  return _.filter(elArr, a => a.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
