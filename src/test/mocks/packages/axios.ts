import axios from 'axios';
const simpleMock = require('simple-mock');
simpleMock.mock(axios, 'post').callFn((testurl) => {
  const random = Math.floor(Math.random() * 3) + 0;
  const output = ['N', 'Y', 'D', 'S'];
  return {
    data: { verificationResultCode: output[random] },
  };
});

export { axios };
