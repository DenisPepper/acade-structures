export class Component {
    name;
    count;
    constructor(name = 'new component', count = 1) {
        this.name = name;
        this.count = count;
    }
    setName(name) {
        this.name = name;
    }
    setCount(count) {
        this.count = count;
    }
}
export class Operation {
    inputComponents;
    outputComponents;
    constructor() {
        this.inputComponents = [];
        this.outputComponents = [];
    }
    addComponent(position, name, count) {
        const component = new Component(name, count);
        if (position === 'input') {
            this.inputComponents.push(component);
        }
        if (position === 'output') {
            this.outputComponents.push(component);
        }
        return component;
    }
}
