type Comparator = (a: number, b: number) => boolean;
type Value = number | null;

export class Node {
  value: Value;
  left: Node;
  right: Node;

  constructor(value: Value) {
    this.value = value;
  }

  add(value: number, compare: Comparator) {
    if (this.value === value) return;

    if (this.value === null) {
      this.value = value;
      return;
    }

    const isFirstGreaterThenLast = compare(this.value, value);

    if (isFirstGreaterThenLast) {
      if (!this.left) {
        this.left = new Node(value);
        return;
      }
      this.left.add(value, compare);
    }

    if (!isFirstGreaterThenLast) {
      if (!this.right) {
        this.right = new Node(value);
        return;
      }
      this.right.add(value, compare);
    }
  }

  remove(value: number) {}

  find(value: number, compare: Comparator): Node | undefined {
    if (this.value === null) return;

    if (this.value === value) return this;

    const isFirstGreaterThenLast = compare(this.value, value);
    return isFirstGreaterThenLast
      ? this.left && this.left.find(value, compare)
      : this.right && this.right.find(value, compare);
  }
}

export class Tree {
  root: Node;
  comparator: Comparator;

  constructor(comparator: Comparator = (a, b) => a > b) {
    this.root = new Node(null);
    this.comparator = comparator;
  }

  add(value: number) {
    this.root.add(value, this.comparator);
    return this;
  }

  remove(value: number) {
    this.root.remove(value);
  }

  find(value: number) {
    return this.root.find(value, this.comparator);
  }
}

const tree = new Tree();
const root = tree.add(6).add(4).add(8).add(7).add(2).add(3).add(1);

console.log(root.find(3));
