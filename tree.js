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
    findByDepth(value) {
        if (this.value === value)
            return this;
        for (const child of this.children) {
            const nestedNode = child.findByDepth(value);
            if (nestedNode)
                return nestedNode;
        }
    }
    findByBreadth(value) {
        if (this.value === value)
            return this;
        let children = this.children;
        let nestedchildren = [];
        while (children.length > 0) {
            for (const child of children) {
                if (child.value === value)
                    return child;
                child.children.forEach((item) => nestedchildren.push(item));
            }
            children = [...nestedchildren];
            nestedchildren = [];
        }
    }
    findByBreadth2(value) {
        if (this.value === value) {
            console.log(this.value);
        }
        if (this.value === value)
            return this;
        for (const child of this.children) {
            if (child.value === value)
                return child;
        }
        for (const child of this.children) {
            const nestedNode = child.findByBreadth2(value);
            if (nestedNode)
                return nestedNode;
        }
    }
}
export class Tree {
    root;
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }
    add(path) { }
    remove(path) { }
    find(value) {
        return this.root.findByDepth(value);
    }
}
const tree = new Tree('root');
const root = tree.root;
const stage1 = root.addNode('/stage 1').node;
stage1?.addNode('/1-1');
stage1?.addNode('/1-2');
const stage2 = root.addNode('/stage 2').node;
stage2?.addNode('/2-1');
stage2?.addNode('/2-2').node.addNode('/2-2-1');
stage2?.addNode('/2-3');
root.addNode('/stage 3');
//console.log(root.find('/2-2-1'));
console.log(root.findByBreadth2('/2-3'));
/*
1 add this ts file to files array in tsconfig.json

2. compile this module: npx tsc
*/
