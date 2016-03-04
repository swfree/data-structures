var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

var DoubleNode = function(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var doubleNode = new DoubleNode(value);
  if (this.head === null) {
    this.head = doubleNode;
    this.tail = doubleNode;
  } else {
    this.tail.next = doubleNode;
    doubleNode.previous = this.tail;
  }
  this.tail = doubleNode;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var doubleNode = new DoubleNode(value);
  if (this.head === null) {
    this.head = doubleNode;
    this.tail = doubleNode;
  } else {
    this.head.previous = doubleNode;
    doubleNode.next = this.head;
  }
  this.head = doubleNode;
};

DoublyLinkedList.prototype.removeHead = function() {
  var temp = this.head.value;
  if (!this.head.next) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return temp;
};

DoublyLinkedList.prototype.removeTail = function () {
  var temp = this.tail.value;
  if (!this.tail.previous) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.previous;
  }
  return temp;
};

DoublyLinkedList.prototype.contains = function(target, doublenode) {
  doublenode = doublenode || this.head;
  if (doublenode.value === target) {
    return true;
  }
  if (this.tail === doublenode) {
    return false;
  }
  return this.contains(target, doublenode.next);
};

var aDoubleList = new DoublyLinkedList();

aDoubleList.addToTail(4);
aDoubleList.addToHead(4);