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

//This function takes in user details to check their kyc(know your customer)
export const checkCustomer = ({ validateUser }) => async (
  data: kycRequestBody
): Promise<{}> => {
  try {
      
    //check user details to validate against set constrains
    const { error } = validateUser(data);
    //throw error in cases of contraints violation
    if (error) throw new Error(error);

    //api request body
    const requestBody = {
      birthDate: data.birthDate,
      givenName: data.firstName,
      middleName: data.middleName,
      familyName: data.lastName,
      licenceNumber: data.licenceNumber,
      stateOfIssue: data.stateOfIssue,
      expiryDate: data.expiryDate,
    };
  } catch (error) {
    console.log(error);
  }
};
