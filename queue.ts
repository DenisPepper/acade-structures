class Queue {
  readonly items: any[];

  constructor() {
    this.items = [];
  }

  enqueue(value: any) {
    this.items.unshift(value);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return [...this.items];
  }
}
