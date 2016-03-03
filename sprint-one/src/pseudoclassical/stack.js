var Stack = function() {
  this._items = 0;
  this._storage = {};
};

Stack.prototype.push = function (value) {
  this._storage[this._items] = value;
  this._items++;
};

Stack.prototype.pop = function () {
  if (this._items > 0) {
    this._items--;
    var temp = this._storage[this._items];
    delete this._storage[this._items];
    return temp;
  }
};

Stack.prototype.size = function () {
  return this._items;
};