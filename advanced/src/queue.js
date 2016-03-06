var Queue = function() {
  this._items = 0;
  this._storage = {};
  this._min = 0;
  this._max = 0;
};

Queue.prototype.enqueue = function (value) {
  this._storage[this._max] = value;
  this._items++;
  this._max++;
};

Queue.prototype.dequeue = function () {
  if (this._items > 0) {
    var temp = this._storage[this._min];
    this._items--;
    delete this._storage[this._min];
    this._min++;
    return temp;
  }
  return null;
};

Queue.prototype.size = function () {
  return this._items;
};