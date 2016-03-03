var Queue = function() {
  var queue = {
    storage: {},
    items: 0,
    min: 0,
    max: 0
  };

  for (var key in queueMethods) {
    queue[key] = queueMethods[key];
  }

  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.max] = value;
    this.max++;
    this.items++;
  },
  dequeue: function () {
    if (this.items > 0) {
      var temp = this.storage[this.min];
      delete this.storage[this.min];
      this.items--;
      this.min++;
      return temp;
    }
  },
  size: function () {
    return this.items;
  }
};


