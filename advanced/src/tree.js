var Tree = function(value) {
  this.value = value;
  this.children = [];
  this.parent = null;
};

Tree.prototype.addChild = function(value) {
  var newTree = new Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

Tree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++ ) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    } 
  }

  return false;
};

Tree.prototype.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

Tree.prototype.traverse = function(cb) {
  for (var i = 0; i < this.children.length; i++) {
    cb.apply(this.children[i]);
    if (this.children[i].children.length > 0) {
      this.children[i].traverse(cb);
    }
  }
};