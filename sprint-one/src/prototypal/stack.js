var Stack = function() {
  var obj = Object.create(stackMethods);
  obj._storage = {};
  obj._items = 0;
  return obj;
};

var stackMethods = {
  push: function (value) {
    this._storage[this._items] = value;
    this._items++;
  },
  pop: function () {
    if (this._items > 0) {
      this._items--;
      var temp = this._storage[this._items];
      delete this._storage[this._items];
      return temp;
    }
  },
  size: function () {
    return this._items;
  }
};