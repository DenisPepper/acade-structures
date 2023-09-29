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
}
