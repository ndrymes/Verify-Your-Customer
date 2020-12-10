const { checkCustomer } = require('../controller/checkCustomer');
let { expect, assert } = require('chai');

const testUrl = 'http://testurl.com';
process.env.NODE_ENV = 'test';
const mockDependencies = require('./mocks/index');

describe('customer check Controller', async () => {
  const knowYourCustomer = await checkCustomer(mockDependencies);
  it('should throw an error when called with invalid data', async () => {
    try {
      await knowYourCustomer({});
    } catch (error) {
      expect(error.message).to.equal(
        'ValidationError: "firstName" is required'
      );
    }
  });

  it('should throw an error when called with wrong birthdate format', async () => {
    try {
      await knowYourCustomer({ birthDate: 23 });
    } catch (error) {
      expect(error.message).to.equal(
        'Error: birth date is required and must be in YYYY-MM-DD format'
      );
    }
  });

  it('should throw an error when not called with lastname', async () => {
    try {
      await knowYourCustomer({
        birthDate: 2000 - 12 - 08,
        firstName: 'Oluwole',
      });
    } catch (error) {
      expect(error.message).to.equal('ValidationError: "lastName" is required');
    }
  });

  it('should throw an error when not called with licence Number ', async () => {
    try {
      await knowYourCustomer({
        birthDate: 2000 - 12 - 08,
        firstName: 'Oluwole',
        lastName: 'Sunmonu',
      });
    } catch (error) {
      expect(error.message).to.equal(
        'ValidationError: "licenceNumber" is required'
      );
    }
  });

  it('should throw an error when  called with state of issuance ', async () => {
    try {
      await knowYourCustomer({
        birthDate: 2000 - 12 - 08,
        firstName: 'Oluwole',
        lastName: 'Sunmonu',
        licenceNumber: '08FGED',
      });
    } catch (error) {
      expect(error.message).to.equal(
        'Error: state of issuance is required, and must be either of NSW, QLD, SA, TAS, VIC, WA, ACT, NT'
      );
    }
  });

  it('should throw an error when  called with an invalid state of issuance ', async () => {
    try {
      await knowYourCustomer({
        birthDate: 2000 - 12 - 08,
        firstName: 'Oluwole',
        lastName: 'Sunmonu',
        licenceNumber: '08FGED',
        stateOfIssue: 'MON',
      });
    } catch (error) {
      expect(error.message).to.equal(
        'Error: state of issuance is required, and must be either of NSW, QLD, SA, TAS, VIC, WA, ACT, NT'
      );
    }
  });
});
