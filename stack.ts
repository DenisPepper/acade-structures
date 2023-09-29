interface IStack {
  items: any[];
  push(value: any): void;
  pop(): any;
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
}
