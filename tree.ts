interface INode {
  parent: NodeType;
  children: INode[];
  value: any;
  addNode(value: any): ITreeNode;
  removeNode(index: number): ITreeNode;
}

interface ITreeNode {
  node: NodeType;
  index: number;
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

  addNode(value: any): ITreeNode {
    const node = new Node(value, this);
    this.children.push(node);
    return { node, index: this.children.length - 1 };
  }

  removeNode(index: number): ITreeNode {
    let node: NodeType = null;
    this.children = this.children.filter((el, i) => {
      if (i === index) node = el;
      return i !== index;
    });
    return { node, index };
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
const bl = pack1.node?.addNode('Боковина левая');
const br = pack1.node?.addNode('Боковина правая');
const iz = pack2.node?.addNode('Изголовье');
console.dir(tree);
