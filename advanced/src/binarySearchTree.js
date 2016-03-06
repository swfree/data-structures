var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.size = 1;
  tree.depth = 1;
  tree.leftsize = 0;
  tree.rightsize = 0;
  tree.parent = null;

  return tree;
};

BinarySearchTree.prototype.updateSize = function () {
  if (this.parent) {
    if (this.value < this.parent.value) {
      this.parent.leftsize ++;
    } else {
      this.parent.rightsize ++;
    }
    this.updateSize.call(this.parent);
  } else {
    this.depth = Math.max(this.leftsize, this.rightsize);
    this.checkSize();
  }
};


BinarySearchTree.prototype.insert = function (target, rebalancing) {
  rebalancing = rebalancing || false;
  this.size ++; // we're assuming we're not trying to add duplicate values (NEVER CHANGE)
  if (this.value < target) {
    if (this.right) {
      this.insert.call(this.right, target);
    } else {
      this.right = BinarySearchTree(target);
      this.right.parent = this;
      var tempMax = Math.max(this.leftsize, this.rightsize);
      this.rightsize ++;
      if (this.rightsize > tempMax) {
        this.updateSize();
      }
    }
  } else if (this.value > target) {
    if (this.left) {
      this.insert.call(this.left, target);
    } else {
      this.left = BinarySearchTree(target);
      this.left.parent = this;
      var tempMax = Math.max(this.leftsize, this.rightsize);
      this.leftsize ++;
      if (this.leftsize > tempMax) {
        this.updateSize();
      }
    }
  }
  if (!rebalancing) {
    this.getToTop().checkSize();
  }
};

BinarySearchTree.prototype.getToTop = function () {
  if (this.parent) {
    return this.getToTop.call(this.parent);
  }
  return this;
};

BinarySearchTree.prototype.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  if (this.value < target) {
    if (this.contains.call(this.right, target)) {
      return true;
    }
  } else if (this.value > target) {
    if (this.contains.call(this.left, target)) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.depthFirstLog.call(this.left, cb);
  }
  if (this.right) {
    this.depthFirstLog.call(this.right, cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  // var treeQueue = new Queue();
  // add this to queue
  // helper function:
    // var temp = queue.dequeue
    // if temp
      // if temp.left, add to queue
      // if temp.right, add to queue
      // cb temp
      // helper()
  //helper()
  var treeQueue = new Queue();
  treeQueue.enqueue(this);
  var helper = function () {
    var temp = treeQueue.dequeue();
    if (temp) {
      if (temp.left) {
        treeQueue.enqueue(temp.left);
      }
      if (temp.right) {
        treeQueue.enqueue(temp.right);
      }
      cb(temp.value);
      helper();
    }
  };
  helper();
};

BinarySearchTree.prototype.rebalance = function () {
  var temp = [];
  this.depthFirstLog(function (nodevalue) {
    temp.push(nodevalue);
  });
  temp.sort( function(a, b) { a - b; } );  
  var treeRoot = temp[Math.floor(temp.length / 2)];
  this.value = treeRoot;
  this.size = 1;
  this.depth = 1;
  this.leftsize = 0;
  this.rightsize = 0;
  this.left = null;
  this.right = null;
  var queue = new Queue();
  var helper = function (nodevalues) {
    if (nodevalues.length === 1) {
      queue.enqueue(nodevalues[0]);
    } else if (nodevalues.length > 1) {
      var index = Math.floor(nodevalues.length / 2);
      var median = nodevalues[index];
      if (median !== treeRoot) {
        queue.enqueue(median);
      }
      helper(nodevalues.slice(0, index));
      helper(nodevalues.slice(index + 1));
    }
  };
  helper(temp);
  var queueSize = queue.size();
  for (var i = 0; i < queueSize; i++) {
    this.insert(queue.dequeue());
  }
};

BinarySearchTree.prototype.checkSize = function () {
  if ((Math.floor(Math.log2(this.size)) + 1) / (this.depth + 1) < 0.5) {
    this.rebalance();
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
