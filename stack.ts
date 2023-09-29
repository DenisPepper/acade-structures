interface IStack {
  items: any[];
  push(value: any): void;
  pop(): any;
  isEmpty(): boolean;
}

class Stack implements IStack {
  items: any[];

  constructor() {
    this.items = [];
  }

  push(value: any): void {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
