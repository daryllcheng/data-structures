var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    back: 0,
    front: 0,
    length: 0,
    storage: {}
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(string) {
    this.storage[this.back] = string;
    this.length++;
    this.back++;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
    }
    var temp = this.storage[this.front];
    this.front++;
    return temp;
  }
};


