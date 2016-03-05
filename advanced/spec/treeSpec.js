describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = new Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should make children that know their parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should remove parent from child and child from parent', function () {
    tree.addChild(5);
    tree.children[0].addChild(4);
    var temp = tree.children[0].children[0];
    tree.children[0].children[0].removeFromParent();
    expect(temp.parent).to.equal(null);
    expect(tree.children[0].children.length).to.equal(0);
  });

  it('should execute a callback on every node', function () {
    var stuff = [];
    var logAll = function() {
      stuff.push(this.value);
    };
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].addChild(1);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[0].addChild(2);
    tree.traverse(logAll);
    expect(stuff).to.eql([5, 4, 3, 2, 1]);
  });
});
