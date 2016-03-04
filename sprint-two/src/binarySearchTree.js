var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function (target) {
  if (this.value < target) {
    if (this.right) {
      this.insert.call(this.right, target);
    } else {
      this.right = BinarySearchTree(target);
    }
  } else if (this.value > target) {
    if (this.left) {
      this.insert.call(this.left, target);
    } else {
      this.left = BinarySearchTree(target);
    }
  }
  // if this.value < target
    // if this.right
      // insert(target, this.right)
    // else 
  // else if this.value > target
    // this.left = BinarySearchTree(target)// if this.left
      // insert(target, this.left)
    // else 
      // this.left = BinarySearchTree(target)
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
  // if this.value === target
    // return true
  // if this.value < target
    // this.contains.call(this.right, target)
  // else 
    // this.contains.call(this.left, target)
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
