/*
    управление цепочкой операций 
*/

interface IComponent {
  name: string;
  count: number;
}

export class Component implements IComponent {
  name: string;
  count: number;

  constructor(name: string, count: number = 1) {
    this.name = name;
    this.count = count;
  }
}

type Position = 'input' | 'output';

export class Operation {
  private inputComponents: Component[];
  private outputComponents: Component[];

  constructor() {
    this.inputComponents = [];
    this.outputComponents = [];
  }

  addComponent(position: Position, name: string, count: number): Component {
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

