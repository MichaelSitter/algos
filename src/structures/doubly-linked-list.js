function Node(v) {
  this.value = v;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

DoubleLinkedList.prototype.append = function(item) {
  var node = new Node(item);
  if (this.tail === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};

DoubleLinkedList.prototype.prepend = function(item) {
  var node = new Node(item);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  this.length++;
};

DoubleLinkedList.prototype.length = function() {
  return this.length;
};

DoubleLinkedList.prototype.remove = function(idx) {
  if (idx >= this.length) {
    throw new Error('out of range');
  }

  // Remove first element
  if (idx === 0) {
    this.head = this.head.next;
    this.head.prev = null;
    // Remove final element
  } else if (idx === this.length) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    // Remove any element inside
  } else {
    var count = 0;
    var curr = this.head;
    var prev = null;
    while (count < idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
  }

  this.length--;
};

DoubleLinkedList.prototype.item = function(idx) {
  if (idx >= this.length) {
    throw new Error('out of range');
  }
  var count, curr;
  // Item in first half; iterate from head of list
  if (idx < this.length / 2) {
    count = 0;
    curr = this.head;
    while (count < idx) {
      count++;
      curr = curr.next;
    }
    return curr.value;
    // Item in last half; iterate from end of list
  } else {
    count = this.length - idx;
    curr = this.tail;
    while (count >= idx) {
      count--;
      curr = curr.prev;
    }
    return curr.value;
  }
};

export default DoubleLinkedList;
