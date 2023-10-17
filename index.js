import { Operation } from './operations-chain-management.js';


const cutDsp = new Operation();
cutDsp.addComponent('output', 'Боковина кровати', 2);
cutDsp.addComponent('output', 'Изголовье', 1);
cutDsp.addComponent('output', 'Изножье', 1);

console.log(opr)

const drillDsp = new Operation();
drillDsp.addComponent();