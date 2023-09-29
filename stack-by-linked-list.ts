import { LinkedList } from './linked-list';

interface IStack {
  items: LinkedList;
  push(value: any): void;
  pop(): any;
  isEmpty(): boolean;
  toArray(): any[];
}

export class Stack implements IStack {
  items: LinkedList;

  constructor() {
    this.items = new LinkedList();
  }

  push(value: any): void {
    this.items.addFirst(value);
  }

  pop() {
    return this.items.removeFirst();
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
