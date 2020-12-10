const Joi = require('joi');
const simpleMock = require('simple-mock');
simpleMock.mock(Joi, 'validate').callFn(() => {});

module.exports = Joi;
