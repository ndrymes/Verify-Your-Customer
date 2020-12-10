import { DI } from '../awilix';

const customer: Function = DI.resolve('checkCustomer');
console.log(customer);
customer({});
