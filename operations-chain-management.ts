/*
  управление цепочкой операций 
*/
type Position = 'input' | 'output';

interface Point {
  operation: Operation;
  index: number;
}

interface OperationComponent {
  component: Component;
  index: number;
}

export class Component {
  name: string;
  count: number;

  constructor(name: string = 'new component', count: number = 1) {
    this.name = name;
    this.count = count;
  }
}

export class Operation {
  name: string;
  count: number; // TODO: операции могут быть пакетные и поточные
  prev: Operation; // TODO: Входные компоненты могут поступать только из предыдущих операций
  private inputComponents: Component[];
  private outputComponents: Component[];

  constructor(name: string, count: number = 1) {
    this.name = name;
    this.count = count;
    this.inputComponents = [];
    this.outputComponents = [];
  }

  addComponent(
    position: Position,
    name: string,
    count: number
  ): OperationComponent {
    const component = new Component(name, count);
    let index: number;
    if (position === 'input') {
      this.inputComponents.push(component);
      index = this.inputComponents.length - 1;
    }
    if (position === 'output') {
      this.outputComponents.push(component);
      index = this.outputComponents.length - 1;
    }
    return { component, index };
  }
}

export class Route {
  name: string;
  private operations: Operation[];
  // TODO: нужен список всех выходных компонентов с непотребленным количеством

  constructor() {
    this.operations = [];
  }

  addPoint(name: string, count: number): Point {
    const operation = new Operation(name, count);
    this.operations.push(operation);
    return { operation, index: this.operations.length - 1 };
  }
}
