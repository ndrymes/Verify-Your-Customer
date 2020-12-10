# KNOW_YOUR_CUSTOMER
This apps helps to know beneficiary/customer kyc level. 
It takes in the details of the users and check if they are who they claim to be.
The users first name is assumed to be given name and the last name as the family name.
```
Node
typescript
Libaries : prettier, mocha, axios
```
**Install all dependencies**
```
- Download or clone
- Open terminal inside the root directory of clone folder
- npm install
```

**Start the application**
```
npm run build
npm run start
```
**Run all tests**
```
npm run test
```

**Run development enviroment**
```
npm run dev
```
**Run linting**
```
npm run prettier:write
```

#-------------------------------Environment variables--------------------------------------------------

 Just as provided in sample.env

``
TEST_APIKEY=''
``
``
TEST_URL=''
``

where TEST_URL is an endpoint used to verify user kyc level
And TEST_APIKEY is the api key supplied as the header for the endpoint above.
##  AUTHOR
Oluwole