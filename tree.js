"use strict";

var Node = /** @class */ (function () {
    function Node(value, parent) {
        if (parent === void 0) { parent = null; }
        this.parent = parent;
        this.children = [];
        this.value = value;
    }
    Node.prototype.addNode = function (value) {
        var node = new Node(value, this);
        this.children.push(node);
        return { node: node, index: this.children.length - 1 };
    };
    Node.prototype.removeNode = function (index) {
        var node = null;
        this.children = this.children.filter(function (el, i) {
            if (i === index)
                node = el;
            return i !== index;
        });
        return { node: node, index: index };
    };
    return Node;
}());
export var Tree = /** @class */ (function () {
    function Tree(rootValue) {
        this.root = new Node(rootValue);
    }
    return Tree;
}());
