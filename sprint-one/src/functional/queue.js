var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  var numberOfKeys = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
    numberOfKeys++;
  };

  someInstance.dequeue = function() {
    if (numberOfKeys > 0) {
      numberOfKeys--;
    }
    var temp = storage[counter];
    counter++;
    return temp;
  };

  someInstance.size = function() {
    return numberOfKeys;
  };

  return someInstance;
};
