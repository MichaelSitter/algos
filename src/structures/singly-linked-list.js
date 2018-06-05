function Node(v) {
  this.value = v;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.add = function(item) {
  var node = new Node(item);
  if (!this.head) {
    this.head = node;
  } else {
    var curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }

  this.length++;
};

LinkedList.prototype.length = function() {
  return this.length;
};

LinkedList.prototype.find = function(item) {
  var idx = 0;
  var curr = this.head;
  if (!curr) {
    return -1;
  }
  while (curr.value !== item) {
    if (!curr.next) {
      return -1;
    }
    idx++;
    curr = curr.next;
  }
  return idx;
};

LinkedList.prototype.remove = function(idx) {
  if (idx < 0 || idx >= this.length) {
    throw new Error('out of bounds');
  }

  var count = 0;
  var prev = null;
  var curr = this.head;

  if (idx === 0) {
    this.head = curr.next;
    this.length--;
    return;
  }

  while (count < idx) {
    prev = curr;
    curr = curr.next;
    count++;
  }

  prev.next = curr.next;
  this.length--;
};

export default LinkedList;
