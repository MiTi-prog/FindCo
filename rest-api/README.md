# FindCo
FindCo full stack university project

## Running FindCO API

Prerequesites
- [NodeJS](https://nodejs.org/en/).
- [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


## Installing the Project

after you have NodejS + NPM installed execute from project folder
```bash
npm install
```


edit ``.env`` to suit your needs
```bash
API_PORT = 8080
MONGODB_URI=YourMongoDBConnectionURI
JWT_SECRET=death-wagon
JWT_EXPIRATION="15m"
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
Everything DB Related is in ./database


Routes -- ./app/routes
Controllers -- ./app/controllers
Models -- ./app/models
Tests -- ./spec
