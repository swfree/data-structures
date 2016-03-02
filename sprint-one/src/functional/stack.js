var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    if (items > 0) {
      items--;  
    }
    var temp = storage[items];
    delete storage[items];
    return temp;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
