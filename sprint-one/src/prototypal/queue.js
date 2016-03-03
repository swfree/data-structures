var Queue = function() {
  var obj = Object.create(queueMethods);
  obj._storage = {};
  obj._items = 0;
  obj._max = 0;
  obj._min = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._max] = value;
    this._max++;
    this._items++;
  },
  dequeue: function() {
    if (this._items > 0) {
      this._items--;
      var temp = this._storage[this._min];
      delete this._storage[this._min];
      this._min++;
      return temp;
    }
  },
  size: function() {
    return this._items;
  }
};