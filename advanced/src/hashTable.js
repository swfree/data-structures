

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numOfKeys = 0;
  for ( var i = 0; i < this._limit; i++ ) {
    this._storage.set(i, []);
  }
  // for ( i = 0, i< this._limit, i ++ )
    // this._storage.set(i, [])
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._numOfKeys++;
  // this.checkSize();
  this.remove(k);
  var temp = this._storage.get(index).slice();
  temp.push([k, v]);
  this._storage.set(index, temp); // feels sketchy, are we allowed to do this?
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
  // this._numOfKeys--;
  // this.checkSize();
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice([i], 1);
    }
  }
};

// HashTable.prototype.checkSize = function () {
//   if (this._numOfKeys / this._limit > 0.75) {
//     this.resize(2);
//   }
//   if (this._numOfKeys / this._limit < 0.25) {
//     this.resize(0.5);
//   }
// };

// HashTable.prototype.resize = function(multiplier) {
//   // create array temp
//   // this._limit *= multiplier
//   // this._storage.each(function(bucket){
//     // for each pair in bucket
//       // temp.push pair
//       // remove pair
//   //})

//   // loop over temp and insert each k,v pair
//   var temp = [];
//   this._limit *= multiplier;
//   this._storage.each(function(bucket) {
//     for (var i = 0; i < bucket.length; i++) {
//       temp.push(bucket[i]);
//       bucket.splice(i, 1);
//     }
//   });
//   this._numOfKeys = 0;
//   for (var j = 0; j < temp.length; j++) {
//     this.insert(temp[j][0], temp[j][1]);
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */