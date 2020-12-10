import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  TEST_APIKEY: process.env.TEST_APIKEY,
  TEST_URL: process.env.TEST_URL,
};
