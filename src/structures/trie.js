function Trie() {
  this.children = {};
  this.value = null;
}

Trie.prototype.isLeaf = function() {
  return Object.keys(this.children).length === 0;
};

Trie.prototype.isFree = function() {
  return !this.value;
};

Trie.prototype.find = function(item) {
  var node = this;
  for (var idx in item) {
    var char = item[idx];
    if (node.children[char]) {
      node = node.children[char];
    } else {
      return null;
    }
  }

  return node.value;
};

Trie.prototype.insert = function(item) {
  var node = this;
  for (var idx in item) {
    let char = item[idx];
    if (node.children[char]) {
      node = node.children[char];
    } else {
      break;
    }
  }

  while (idx < item.length) {
    var char = item[idx];
    node.children[char] = new Trie();
    node = node.children[char];
    idx++;
  }

  node.value = item;
};

Trie.prototype.delete = function(item) {
  function deleteRec(node, level) {
    if (level === item.length) {
      delete node.value;
      return node.isFree();
    } else {
      var char = item[level];
      if (deleteRec(node.children[char], level + 1)) {
        delete node.children[char];
        return node.isFree() && node.isLeaf();
      }
    }
  }

  deleteRec(this, 0);
};

export default Trie;
