

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  _.each(this.nodes, function(item) {
    item === node && (found = true);
  });
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var linkedNodes = this.edges[node];
  var temp = this;
  if (linkedNodes !== []) {  
    _.each(linkedNodes, function(link) {
      temp.removeEdge(link, node);
    });
    linkedNodes = [];
  }
  this.nodes.splice(this.nodes.indexOf(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes.includes(fromNode) && this.nodes.includes(toNode)) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode)) {
    this.edges[fromNode].splice(this.edges.indexOf(toNode), 1);
    this.edges[toNode].splice(this.edges.indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * If all nodes have unique values, then:
 * addNode = constant time (simply pushing a value into an array)
 * contains = linear time (require iteration through array)
 * removeNode = linear time ('indexOf' is O(n) and if node has edges, time may increase)
 * hasEdge = linear time ('includes' method probably has to iterate through an array )
 * addEdge = constant time (only pushes, doesn't assign value to a specific index so no shifting required)
 * removeEdge = linear time (uses 'indexOf' again)
 * forEachNode = linear time (iterate thorugh array)
 */


