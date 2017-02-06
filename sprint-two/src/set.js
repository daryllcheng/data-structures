var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
};

setPrototype.contains = function(item) {
  return this.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * probably all constant time, unless 'hasOwnProperty' method adds more time
 */
