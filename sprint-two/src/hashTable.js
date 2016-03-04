

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i++ ) {
    this._storage.set(i, []);
  }
  // for ( i = 0, i< this._limit, i ++ )
    // this._storage.set(i, [])
};

HashTable.prototype.insert = function(k, v) {
  this.remove(k);
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).push([k, v]); // feels sketchy, are we allowed to do this?
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice([i], 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */