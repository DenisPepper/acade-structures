interface INode {
  parent: NodeType;
  children: INode[];
  value: any;
  addNode(value: any): void;
  removeNode(index: number): NodeType;
}

type NodeType = INode | null;

class Node implements INode {
  children: INode[];
  parent: NodeType;
  value: any;

  constructor(value: any, parent: NodeType = null) {
    this.parent = parent;
    this.children = [];
    this.value = value;
  }

  addNode(value): void {
    this.children.push(new Node(value, this));
  }

  removeNode(index: number): NodeType {
    let node: NodeType = null;
    this.children = this.children.filter((el, i) => {
      if (i === index) node = el;
      return i !== index;
    });

    return node;
  }
}

export class Tree {
  root: Node;

  constructor(rootValue: any) {
    this.root = new Node(rootValue);
  }
}
