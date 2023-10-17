interface INode {
  parent: INode | null;
  children: INode[];
  addNode(node: INode): void;
  removeNode(index: number): INode | null;
}

class Node implements INode {}

export class Tree {
  root: Node;

  constructor() {
    this.root = new Node();
  }
}
