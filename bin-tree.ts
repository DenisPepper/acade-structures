type Comparator = (a: number, b: number) => boolean;
type Value = number | null;

export class Node {
  value: Value;
  left: Node;
  right: Node;

  constructor(value: Value) {
    this.value = value;
  }

  add(value: number, compare: Comparator): Node {
    if (this.value === value) return this;

    if (this.value === null) {
      this.value = value;
      return this;
    }

    const node = new Node(value);
    const isFirstGreaterThenLast = compare(this.value, value);
    if (isFirstGreaterThenLast) {
      this.left = node;
    } else {
      this.right = node;
    }
    return node;
  }

  remove(value: number) {}

  find(value: number, compare: Comparator): Node | undefined {}
}

export class Tree {
  root: Node;
  comparator: Comparator;

  constructor(comparator: Comparator = (a, b) => a > b) {
    this.root = new Node(null);
    this.comparator = comparator;
  }

  add(value: number) {
    return this.root.add(value, this.comparator);
  }

  remove(value: number) {
    this.root.remove(value);
  }

  find(value: number) {
    return this.root.find(value, this.comparator);
  }
}
