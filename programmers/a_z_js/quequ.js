class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  // 큐의 rear에서 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐의 front에서 내보내기
  dequeue() {
    const value = this.queue[this.front];
    //delete 연산자는 객체의 속성을 제거
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
