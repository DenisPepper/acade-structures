interface INode {
  parent: INode | null;
  children: INode[];
  addNode(node: INode): void;
  removeNode(index: number): INode | null;
}

class Node implements INode {
  children: INode[];
  parent: INode | null;

  constructor(parent = null) {
    this.parent = parent;
    this.children = [];
  }

  addNode(node: INode): void {
    this.children.push(node);
  }

  removeNode(index: number): INode | null {
    let node: INode | null = null;
    this.children = this.children.filter((el, i) => {
      if (i === index) node = el;
      return i !== index;
    });

    return node;
  }
}

export class Tree {
  root: Node;

  constructor() {
    this.root = new Node();
  }
}
