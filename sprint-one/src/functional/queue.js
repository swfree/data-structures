var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var items = 0;
  var max = 0;
  var min = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
    items++;
  };

  someInstance.dequeue = function() {
    if (items > 0) {
      items--;
    }
    var temp = storage[min];
    delete storage[min];
    min ++;
    return temp;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
