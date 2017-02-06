

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [];
  var indexAtStorage = this._storage.get(index);
  if (indexAtStorage === undefined) {
    tuple.push(k, v);
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else if (indexAtStorage[0][0] === k) {
    indexAtStorage[0][1] = v;
  } else {
    tuple.push(k, v);
    indexAtStorage.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  var indexAtStorage = this._storage.get(index);
  var targetValue = undefined;
  _.each(indexAtStorage, function(tuple) {
    if (tuple[0] === k) {
      targetValue = tuple[1];
    }
  });
  return targetValue;
  // for (var i = 0; i < indexAtStorage.length; i++) {
  //   if (indexAtStorage[i][0] === k) {
  //     return indexAtStorage[i][1];
  //   }
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).splice(0, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert, retrieve, and remove are all constant time opertaions (the loop in retreive is insignificant overall);
 * 
 */


