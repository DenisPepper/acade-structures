/*
    управление цепочкой операций
*/
export class Component {
    name;
    count;
    constructor(name, count = 1) {
        this.name = name;
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
