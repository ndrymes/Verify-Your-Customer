import * as awilix from 'awilix';
import axios from 'axios'
import { validateUser } from './src/utils/validateUser'
import { checkCustomer } from './src/controller/checkCustomer'
import { VerifyDocumentError } from './src/utils/errorHandler'

// use dependency injection to help decouple dependencies
const container = awilix.createContainer();
container.register({ 
    axios: awilix.asValue(axios),
    validateUser:awilix.asValue(validateUser),
    checkCustomer: awilix.asFunction(checkCustomer),
    VerifyDocumentError: awilix.asValue(VerifyDocumentError),
});

export const DI = container