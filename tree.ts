interface INode {}

class Node implements INode {}

export class Tree {
  root: Node;

  constructor() {
    this.root = new Node();
  }
}
