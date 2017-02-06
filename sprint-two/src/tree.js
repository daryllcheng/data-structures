var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = []; 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  var findTarget = function(node) {
    if (node.value === target) {
      found = true;
    }
    if (node.children !== []) {
      _.each(node.children, function(child) {
        findTarget(child);
      });
    }
  };
  findTarget(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = constant time
 * contains = linear time (recursion pretty much iterates through the entire tree in a worst case scenario)
 */
