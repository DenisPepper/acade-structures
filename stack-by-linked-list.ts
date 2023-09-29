import { LinkedList } from './linked-list';

interface IStack {
  items: LinkedList;
  readonly length: number;
  push(value: any): void;
  pop(): any;
  isEmpty(): boolean;
  toArray(): any[];
}

export class Stack implements IStack {
  items: LinkedList;
  length: number;

  constructor() {
    this.items = new LinkedList();
    this.length = 0;
  }

  push(value: any): void {
    this.items.addFirst(value);
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    this.length -= 1;
    return this.items.removeFirst();
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): any[] {
    return this.items.toArray();
  }
}

//test
const stack = new Stack();
stack.push('one');
stack.push('two');
stack.push('three');

console.log(stack.toArray());
