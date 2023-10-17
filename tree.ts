interface INode {
  parent: NodeType;
  children: INode[];
  value: any;
  addNode(value: any): NodeType;
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

  addNode(value): NodeType {
    const node = new Node(value, this);
    this.children.push(node);
    return node;
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

// тесты
const tree = new Tree('Кровать КМ-1');
const pack1 = tree.root.addNode('пакет 1/2');
const pack2 = tree.root.addNode('пакет 2/2');
