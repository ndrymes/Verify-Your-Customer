import { DI } from './awilix';
//import the function and call with input data
const customer: Function = DI.resolve('checkCustomer');
customer({
  birthDate: '1985-02-08',
  firstName: 'James',
  lastName: 'Smith',
  middleName: 'Robert',
  licenceNumber: '94977000',
  stateOfIssue: 'NSW',
})
  .then((response) => {
    console.log({ response });
  })
  .catch((e) => {
    console.log({ e });
  });
