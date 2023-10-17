/*
  управление цепочкой операций 
*/
type Position = 'input' | 'output';

export class Component {
  private name: string;
  private count: number;

  constructor(name: string = 'new component', count: number = 1) {
    this.name = name;
    this.count = count;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setCount(count: number):void {
    this.count = count;
  }
}

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
