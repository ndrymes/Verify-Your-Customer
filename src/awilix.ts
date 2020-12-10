import * as awilix from 'awilix';
import axios from 'axios';
import { validateUser } from './utils/validateUser';
import { checkCustomer } from './controller/checkCustomer';
import { VerifyDocumentError } from './utils/errorHandler';

// use dependency injection to help decouple dependencies
const container = awilix.createContainer();
container.register({
  axios: awilix.asValue(axios),
  validateUser: awilix.asValue(validateUser),
  checkCustomer: awilix.asFunction(checkCustomer),
  VerifyDocumentError: awilix.asValue(VerifyDocumentError),
});

export const DI = container;
