function Node(item) {
  this.value = item;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

function height(node) {
  if (!node) {
    return 0;
  } else {
    return Math.max(height(node.left), height(node.right)) + 1;
  }
}

BinaryTree.prototype.insert = function(item) {
  if (this.root === null) {
    this.root = new Node(item);
    return;
  }

  var curr = this.root;
  while (curr) {
    if (item < this.root.value) {
      if (!curr.left) {
        curr.left = new Node(item);
        break;
      } else {
        curr = curr.left;
      }
    } else {
      if (!curr.right) {
        curr.right = new Node(item);
        break;
      } else {
        curr = curr.right;
      }
    }
  }
};

BinaryTree.prototype.contains = function(item) {
  var step = function(node) {
    if (node === null) {
      return false;
    }
    if (node.value === item) {
      return true;
    }
    if (item < node.value) {
      return step(node.left);
    } else {
      return step(node.right);
    }
  };

  return step(this.root);
};

BinaryTree.prototype.bfs = function() {
  var queue = [];
  var result = [];
  queue.push(this.root);
  while (queue.length) {
    var curr = queue.shift();
    result.push(curr.value);

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return result;
};

BinaryTree.prototype.dfs = function() {
  function dfs(node, res) {
    if (node) {
      res.push(node.value);
      dfs(node.left, res);
      dfs(node.right, res);
      return res;
    }
  }

  return dfs(this.root, []);
};

BinaryTree.prototype.min = function() {
  if (!this.root) {
    throw new Error('no such element');
  }

  var curr = this.root;
  while (curr.left) {
    curr = curr.left;
  }
  return curr.value;
};

BinaryTree.prototype.max = function() {
  if (!this.root) {
    throw new Error('no such element');
  }

  var curr = this.root;
  while (curr.right) {
    curr = curr.right;
  }
  return curr.value;
};

BinaryTree.prototype.height = function() {
  return height(this.root);
};

BinaryTree.prototype.isBalanced = function() {
  function isBalanced(node) {
    // Empty tree is balanced
    if (!node) {
      return true;
    }
    // Tree is balanced if:
    // 1. All sub-trees are balanced
    // 2. Difference of heights is not more than 1
    if (
      Math.abs(height(node.left), height(node.right)) <= 1 &&
      isBalanced(node.left) &&
      isBalanced(node.right)
    ) {
      return true;
    } else {
      return false;
    }
  }
  return isBalanced(this.root);
};

BinaryTree.prototype.getNode = function(item) {
  var step = function(node) {
    if (node === null) {
      throw new Error('element not found');
    }
    if (node.value === item) {
      return node;
    }
    if (item < node.value) {
      return step(node.left);
    } else {
      return step(node.right);
    }
  };

  return step(this.root);
};

BinaryTree.prototype.delete = function(item) {
  var prev = null;
  var curr = this.root;

  function getSmallest(node) {
    if (node.left) {
      return getSmallest(node.left);
    } else {
      return node.value;
    }
  }

  function deleteRec(node, value) {
    if (node === null) return node;

    if (value < node.value) {
      return deleteRec(node.left, value);
    } else if (value > curr.value) {
      return deleteRec(node.right, value);
    } else {
      // Found node to delete
      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      node.value = getSmallest(node.right);
      node.right = deleteRec(node.right, node.right.value);
    }

    return node;
  }

  this.root = deleteRec(this.root, item);
};

export default BinaryTree;
