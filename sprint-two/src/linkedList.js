var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if this is the first node
      // add it as head to this instance of linkedlist
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // you don't want to set first node's next to itself
    }
    this.tail = node;
  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next || null; // if you are removing the only node, head goes back to null
    return temp;
  };

  list.contains = function(target, node) {
    node = node || this.head;
    if (node.value === target) {
      return true;
    }
    if (this.tail === node) {
      return false;
    }
    return this.contains(target, node.next);
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
 */
