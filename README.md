# ES6 Rest Boilerplate [WIP]
[![bitHound Overall Score](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/badges/score.svg)](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate)
[![bitHound Dependencies](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/badges/dependencies.svg)](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/badges/devDependencies.svg)](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate/badges/code.svg)](https://www.bithound.io/github/matheusrocha89/es6-rest-boilerplate)


Boilerplate to create Rest Apis with Mongoose, Express and ES6.

Project uses babel to use the ES6 features, the Mongoose ORM to
make it easier to manipulate data with the MongoDB and the Express
web framework to create the api.

To keep the code with a unique code style the boilerplate includes
Eslint with the `airbnb-base` code style.

## Instalation
 - Clone the project
 - `npm install`

## Run the project
Development mode: `npm run dev`

Production mode: `npm start`

## Environment variables:
The project uses enviroment variables create some configurations.

Below you see the variables and the default values of it.
```
  // App port
  APP_PORT = 8888


  // Database enviroment variables

  // Mongodb URI to connect.
  DB_URI = 'localhost'

  // Mongodb port to connect
  DB_PORT = '27017'

  // Database user
  DB_USER = ''

  // Database password
  DB_PASS = ''

  // Database name to connect
  DB_NAME = 'dbname'
```
