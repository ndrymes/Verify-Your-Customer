import { config } from '../config/index';

//makes sure that data input to function complies with this shape
interface kycRequestBody {
  birthDate: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  licenceNumber: string;
  stateOfIssue: string;
  expiryDate?: string;
}

/**
 * @name checkCustomer
 * @description This function takes in user details to check their kyc(know your customer)
 * @param interface kycRequestBody  the transaction id
 * @returns {} an empty promise when complete
 */

export const checkCustomer = ({
  validateUser,
  axios,
  VerifyDocumentError,
}) => async (data: kycRequestBody): Promise<{}> => {
  try {
    //check user details to validate against set constrains
    const { error } = validateUser(data);
    //throw error in cases of contraints violation
    if (error) throw new Error(error);

    //api request body
    // I assumed that given name is firstname, familyName is lastName
    const requestBody = {
      birthDate: data.birthDate,
      givenName: data.firstName,
      middleName: data.middleName,
      familyName: data.lastName,
      licenceNumber: data.licenceNumber,
      stateOfIssue: data.stateOfIssue,
      expiryDate: data.expiryDate,
    };
    //set request headers
    const headers = {
      Authorization: `Bearer ${config.TEST_APIKEY}`,
    };
    //response body
    const response = await axios.post(config.TEST_URL, requestBody, {
      headers,
    });
    let kycResult: boolean = false;
    if (response.data.verificationResultCode === 'N') {
      kycResult = true;
      return { kycResult };
    }
    if (response.data.verificationResultCode === 'Y') {
      kycResult = false;
      return { kycResult };
    }
    if (
      response.data.verificationResultCode === 'D' ||
      response.data.verificationResultCode === 'S'
    ) {
      throw new VerifyDocumentError({
        code: '“D” or “S”',
        message: 'Document Error” or “Server Error',
      });
    }
  } catch (error) {
    throw error;
  }
};
