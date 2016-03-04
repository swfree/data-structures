

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

var GraphNode = function (value) {
  this.edges = {};
  this.value = value;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(target) {
  this._storage[target] = new GraphNode(target);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for (var node in this._storage) {
    if (this._storage[node].value === target) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for each item in target node's edges property
    // go to that item and delete the value in edges pointing to this node
  // then delete this node from graph's _storage

  for (var neighbor in this._storage[node].edges) {
    removeEdge(neighbor, node);
  }
  delete this._storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this._storage[fromNode].edges.hasOwnProperty(toNode)) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._storage[fromNode].edges[toNode] = true;
  this._storage[toNode].edges[fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this._storage[fromNode].edges[toNode];
  delete this._storage[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each target of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this._storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */