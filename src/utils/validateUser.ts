const Joi = require('joi');

import { constants } from './constants';

export const validateUser = (data) => {
  const schema = Joi.object().keys({
    birthDate: Joi.date()
      .iso()
      .error(
        new Error('birth date is required and must be in YYYY-MM-DD format')
      ),
    middleName: Joi.string().max(100),
    firstName: Joi.string().required().max(100),
    lastName: Joi.string().required().max(100),
    licenceNumber: Joi.string().required(),
    stateOfIssue: Joi.required()
      .valid(...constants.STATE_OF_ISSUE)
      .error(
        new Error(
          `state of issuance is required, and must be either of ${constants.STATE_OF_ISSUE.join(
            ', '
          )}`
        )
      ),
    expiryDate: Joi.string(),
  });
  return schema.validate(data);
};
