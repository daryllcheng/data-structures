var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    index: 0,
    storage: {}
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  size: function() {
    return this.index;
  },
  push: function(string) {
    this.storage[this.index] = string;
    this.index++;
  },
  pop: function() {
    if (this.index > 0) {
      this.index--;
    }
    return this.storage[this.index];
  }
};


