# FindCo
FindCo university project

## Running FindCO API

Prerequesites
- [NodeJS](https://nodejs.org/en/).
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


## Installing the Project

after you have NodejS + NPM installed execute from project folder
```bash
npm install
```


edit ``.env`` to suit your needs
```bash
API_PORT = 8080
MONGODB_URI=YourMongoDBConnectionURI
```


then run this project (in project dir) with
```bash
npm start
```

To run tests (Testing framework is [Jasmine](https://www.npmjs.com/package/jasmine-node))
```
npm test
```
## Usefull for developers

For now API only has 2 routes
```
http://localhost:8080/api/hello
http://localhost:8080/api/hello/1
```

Project structure
```
Everything DB Related is in ./Database


Routes -- ./app/routes
Controllers -- ./app/controllers
Models -- ./app/models
Tests -- ./spec
