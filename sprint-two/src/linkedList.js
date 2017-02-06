var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    var found = false;
    var findTarget = function(node) {
      if (node.value === target) {
        found = true;
      }
      if (node.next !== null) {
        findTarget(node.next);
      }
    };
    findTarget(list.head);
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = constant time 
 * removeHead = constant time (find head, reassign head to head's next. Same number of operations every time)
 * contains = linear time (need to iterate thourgh entire list in worst case scenario)
 */
