var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(string) {
  this.storage[this.back] = string;
  this.back++;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
  }
  var temp = this.storage[this.front];
  this.front++;
  return temp;
};



