class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const quequ = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    quequ.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = quequ.peek();
    if (currentValue[0] < priorities[count]) {
      quequ.enqueue(quequ.dequeue());
    } else {
      const value = quequ.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}
