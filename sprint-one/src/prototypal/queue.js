var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.front = 0;
  instance.back = 0;
  instance.length = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  size: function() {
    return this.length;
  }, 
  enqueue: function(string) {
    this.storage[this.back] = string;
    this.back++;
    this.length++;
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


