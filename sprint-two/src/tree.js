var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _(newTree).extend(treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 

  else {
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