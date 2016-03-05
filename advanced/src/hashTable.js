

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numOfKeys = 0;
  this.initializeStorage();
  // for ( i = 0, i< this._limit, i ++ )
    // this._storage.set(i, [])
};

HashTable.prototype.initializeStorage = function() { // function for actually changing size of storage
  for ( var i = 0; i < this._limit; i++ ) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v, resizing) {
  resizing = resizing || false; // we're not resizing unless we explicitly pass in true
  this._numOfKeys++;
  if (!resizing) { // if we're in the middle of resizing...
    this.checkSize(); // don't checkSize
  }
  this.remove(k, resizing); // if we're resizing, remove won't checkSize either
  var index = getIndexBelowMaxForKey(k, this._limit); // if resize happens, we need the new index
  var temp = this._storage.get(index).slice();
  temp.push([k, v]);
  this._storage.set(index, temp);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k, resizing) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  resizing = resizing || false;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice([i], 1);
      this._numOfKeys--; // numOfKeys should only decrement if something is actually removed
    }
  }
  if (!resizing) {
    this.checkSize();
  }
};

HashTable.prototype.checkSize = function () {
  if (this._numOfKeys / this._limit > 0.75) {
    this.resize(2);
  } else if (this._numOfKeys / this._limit < 0.25) {
    this.resize(0.5);
  }
};

HashTable.prototype.resize = function(multiplier) {
  var temp = [];
  this._limit *= multiplier;
  this._storage.each(function(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      temp.push(bucket[i]);
      // bucket[i].splice(i, 1);
      // ^ oooh editing array as we iterate through it is bad, use initializeStorage instead
    }
  });
  this._storage = LimitedArray(this._limit);
  this.initializeStorage(); // overwrite _storage with _limit empty buckets
  this._numOfKeys = 0;
  for (var j = 0; j < temp.length; j++) {
    this.insert(temp[j][0], temp[j][1], true);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */