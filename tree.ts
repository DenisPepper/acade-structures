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

  add(path: string) {}

  remove(path: string) {}
}

/*
1. add this ts file to files array in tsconfig.json

2. compile this module: npx tsc
*/
