import { Tree } from './tree.js';

// тесты
const tree = new Tree('Кровать КМ-1');
const pack1 = tree.root.addNode('пакет 1/2');
const pack2 = tree.root.addNode('пакет 2/2');
const bl = pack1.node?.addNode('Боковина левая');
const br = pack1.node?.addNode('Боковина правая');
const iz = pack2.node?.addNode('Изголовье');
console.dir(tree);
