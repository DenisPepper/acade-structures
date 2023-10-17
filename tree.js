class Node {
    children;
    parent;
    value;
    constructor(value, parent = null) {
        this.parent = parent;
        this.children = [];
        this.value = value;
    }
    addNode(value) {
        const node = new Node(value, this);
        this.children.push(node);
        return { node, index: this.children.length - 1 };
    }
    removeNode(index) {
        let node = null;
        this.children = this.children.filter((el, i) => {
            if (i === index)
                node = el;
            return i !== index;
        });
        return { node, index };
    }
}
export class Tree {
    root;
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }
}
/*
1. add this ts file to files array in tsconfig.json

2. compile this module: npx tsc
*/
