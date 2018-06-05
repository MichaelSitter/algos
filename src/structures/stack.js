function Node(item) {
  this.value = item;
  this.next = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function(item) {
  var node = new Node(item);
  if (this.top === null) {
    this.top = node;
  } else {
    node.next = this.top;
    this.top = node;
  }
};

Stack.prototype.peek = function() {
  return this.top.value;
};

Stack.prototype.pop = function() {
  if (this.top === null) {
    throw new Error('out of range');
  }
  var val = this.top.value;
  this.top = this.top.next;
  return val;
};

export default Stack;
