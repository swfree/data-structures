var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    debugger;
    if (Object.keys(storage).length > 0){
      storage[Math.max.apply(null, Object.keys(storage)) + 1] = value;
    } else {
      storage[0] = value;
    }
    items++;
  };

  someInstance.dequeue = function() {
    debugger;
    if (items > 0) {
      items--;
    }
    var temp = storage[Math.min.apply(null, Object.keys(storage))];
    delete storage[Math.min.apply(null, Object.keys(storage))];
    return temp;

  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
