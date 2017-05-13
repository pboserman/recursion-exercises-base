
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

  node.childNodes.forEach(child => visitAllNodes(child, callback));
  callback(node);

};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()

  let flattenedArray = [];
  visitAllNodes(node, (node) => {
      flattenedArray.push(node);
  });
  return flattenedArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};