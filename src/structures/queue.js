'use strict';

function Node(item) {
  this.value = item;
  this.next = null;
}

function Queue() {
  this.front = null;
  this.tail = null;
}

Queue.prototype.queue = function(item) {
  var node = new Node(item);
  if (this.front === null) {
    this.front = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

Queue.prototype.peek = function() {
  if (this.items === null) {
    throw new Error('element does not exist');
  }
  return this.items.value;
};

Queue.prototype.dequeue = function() {
  if (this.front === null) {
    throw new Error('element does not exist');
  }
  var val = this.front.value;
  this.front = this.front.next;
  return val;
};

export default Queue;
