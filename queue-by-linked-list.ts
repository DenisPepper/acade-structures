import { LinkedList, IListItem } from './linked-list';

interface IQueue {
  readonly items: LinkedList;
  readonly length: number;
  enqueue(value: any): void;
  dequeue(): IListItem | null;
  isEmpty(): boolean;
  toArray(): IListItem[];
}

export class Queue implements IQueue {
  items: LinkedList;
  length: number;

  constructor() {
    this.items = new LinkedList();
    this.length = 0;
  }

  enqueue(value: any): void {
    this.items.add(value);
    this.length += 1;
  }

  dequeue(): IListItem | null {
    if (this.length === 0) {
      return null;
    }

    this.length -= 1;
    return this.items.removeFirst();
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): IListItem[] {
    return this.items.toArray();
  }
}


