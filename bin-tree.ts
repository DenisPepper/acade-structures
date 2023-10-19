type Comparator = (a: number, b: number) => boolean;
type Value = number | null;

const defaultCompare = (a: number, b: number) => a > b;

export class Node {
  value: Value;
  left: Node | null;
  right: Node | null;
  parent: Node | null;

  constructor(value: Value, parent: Node | null = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  add(value: number, compare: Comparator) {
    if (this.value === value) return;

    if (this.value === null) {
      this.value = value;
      return;
    }

    const isFirstGreaterThenLast = compare(this.value, value);

    if (isFirstGreaterThenLast) {
      if (this.left === null) {
        this.left = new Node(value, this);
        return;
      }
      this.left.add(value, compare);
    }

    if (!isFirstGreaterThenLast) {
      if (this.right === null) {
        this.right = new Node(value, this);
        return;
      }
      this.right.add(value, compare);
    }
  }

  find(value: number, compare: Comparator): Node | undefined {
    if (this.value === null) return;

    if (this.value === value) return this;

    const isFirstGreaterThenLast = compare(this.value, value);
    return isFirstGreaterThenLast
      ? this.left && this.left.find(value, compare)
      : this.right && this.right.find(value, compare);
  }

  remove(value: number, compare: Comparator): Node | undefined {
    const node = this.find(value, compare);
    const rightChild = node.right;
    const leftChild = node.left;

    // если узел не найден
    if (!node) return;

    // если узел не имеет левого и правого
    if (node && leftChild === null && rightChild === null) {
      node === node.parent.right && (node.parent.right = null);
      node === node.parent.left && (node.parent.left = null);
    }

    // если узел имеет только левый
    if (node && leftChild && rightChild === null) {
      node === node.parent.right && (node.parent.right = leftChild);
      node === node.parent.left && (node.parent.left = leftChild);
    }

    // если узел имеет правый и имеет (или не имеет) левый
    if (node && rightChild) {
      node === node.parent.right && (node.parent.right = rightChild);
      node === node.parent.left && (node.parent.left = rightChild);

      // если узел не имеет левый, тогда код ниже не выполнится
      let leftNode = leftChild;
      while (leftNode) {
        leftNode = leftNode.left;
      }
      leftNode && (leftNode.left = leftChild);
    }

    /*
    if (node && rightChild && leftChild === null) {
      node === node.parent.right && (node.parent.right = rightChild);
      node === node.parent.left && (node.parent.left = rightChild);
    }
    */

    return node;
  }
}

export class Tree {
  root: Node;
  comparator: Comparator;

  constructor(comparator: Comparator = defaultCompare) {
    this.root = new Node(null);
    this.comparator = comparator;
  }

  add(value: number) {
    this.root.add(value, this.comparator);
    return this;
  }

  find(value: number) {
    return this.root.find(value, this.comparator);
  }

  remove(value: number) {
    return this.root.remove(value, this.comparator);
  }
}

const tree = new Tree();
const root = tree
  .add(6)
  .add(4)
  .add(2)
  .add(5)
  .add(20)
  .add(14)
  .add(12)
  .add(16)
  .add(30)
  .add(24)
  .add(35);

console.log(tree.remove(20));
