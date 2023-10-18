interface INode {
  parent: NodeType;
  children: INode[];
  value: any;
  addNode(value: any): ITreeNode;
  removeNode(index: number): ITreeNode;
  find(value: any): Node | undefined;
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

  find(value: any): Node | undefined {
    if (this.value === value) {
      return this;
    }
    for (const child of this.children) {
      const nestedNode = child.find(value);
      if (nestedNode) return nestedNode;
    }
  }
}

export class Tree {
  root: Node;

  constructor(rootValue: any) {
    this.root = new Node(rootValue);
  }

  add(path: string) {}

  remove(path: string) {}

  find(value: any): Node | undefined {
    return this.root.find(value);
  }
}

const tree = new Tree('root');
const root = tree.root;
const stage1 = root.addNode('/stage 1').node;
stage1?.addNode('/1-1');
stage1?.addNode('/1-2');
const stage2 = root.addNode('/stage 2').node;
stage2?.addNode('/2-1');
stage2?.addNode('/2-2');
stage2?.addNode('/2-3');
root.addNode('/stage 3');

console.log(root.find('/1-2'));

/*
1 add this ts file to files array in tsconfig.json

2. compile this module: npx tsc 
*/
