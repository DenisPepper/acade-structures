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

  find(value: number, compare: Comparator): Node | undefined {
    console.log(this.value);
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
    return this.root.add(value, this.comparator);
  }

  remove(value: number) {
    this.root.remove(value);
  }

  find(value: number) {
    return this.root.find(value, this.comparator);
  }
}

const tree = new Tree();
const root = tree.add(6);

const stage1 = root.add(5, tree.comparator);
stage1.add(4, tree.comparator);
stage1.add(11, tree.comparator);

const stage2 = root.add(7, tree.comparator);
stage2.add(1, tree.comparator);
stage2.add(8, tree.comparator);

console.log(root);
console.log(root.find(1, tree.comparator));
//console.log(root.find(1, tree.comparator));
