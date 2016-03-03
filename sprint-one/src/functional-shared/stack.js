var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = { items: 0, storage: {} };
  for ( var key in stackMethods) {
    stack[key] = stackMethods[key];
  }

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },

  pop: function() {
    if (this.items > 0) {
      this.items--;
      var temp = this.storage[this.items];
      delete this.storage[this.items];
      return temp;
    }
  },

  size: function() {
    return this.items;
  }

};


