#!/usr/bin/env node

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  append(value) {
    let i = 0;
    let curr = this.head;
    while (curr.nextNode !== null) {
      i++;
      curr = curr.nextNode;
    }
    let newNode = new Node();
    newNode.value = value;
    curr.nextNode = newNode;
  }

  prepend(value) {
    newNode = new Node();
    nextNode.value = value;
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let i = 0;
    let curr = this.head;
    while (curr !== null) {
      i++;
      curr = curr.nextNode;
    }
    return i;
  }

  head() {
    return this.head;
  }

  tail() {
    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    return curr;
  }

  at(index) {
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      i++;
      curr = curr.nextNode;
    }
    return curr;
  }

  pop() {
    let prev = this.head;
    if (prev.nextNode !== null) {
      curr = prev.nextNode;
    } else {
      prev = null;
      return;
    }
    while (curr.nextNode !== null) {
      prev = curr;
      curr = curr.nextNode;
    }
    prev.nextNode = null;
    curr.value = null;
    return;
  }

  contains(value) {
    let curr = this.head;
    while (curr.value !== value && curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    return curr.value === value;
  }

  find(value) {
    let i = 0;
    let curr = this.head;
    while (curr.value !== value && curr.nextNode !== null) {
      i++;
      curr = curr.nextNode;
    }
    if (curr.value !== value) i = null;
    return i;
  }

  tostring() {
    let arr = [];
    while (curr.nextNode !== null) {
      arr.push(curr.value);
      curr = curr.nextNode;
    }
    let string = ")";
    for (val in arr) {
      string.concat(" -> ( " + val + " )");
    }
    string.concat(" -> null");
    return string;
  }

  insertat(value, index) {
    let i = 0;
    let curr = this.head;
    while (i < index - 1 && curr.nextNode !== null) {
      i++;
      curr = curr.nextNode;
    }
    const temp = curr.nextNode;
    curr.nextNode = new Node();
    curr.nextNode.value = value;
    curr.nextNode.nextNode = temp;
  }

  removeat(index) {
    let i = 0;
    let curr = this.head;
    while (i < index - 1 && curr.nextNode !== null) {
      i++;
      curr = curr.nextNode;
    }
    const temp = curr.nextNode.nextNode;
    curr.nextNode = null;
    curr.nextNode = temp;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export { LinkedList, Node };
