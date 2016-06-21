# Calculator
An EAN stack app using 
  * Node - server runtime environment
  * Express - routing
  * Angular - front-end framework
 
[Visit the app on Heroku](http://calculator-ankihg.herokuapp.com/)

## Features
### MVP
 * drop down menu to select operators retrieved from server
 * input for two operands
 * calcuation button that posts equation to server to retrieve result of calculation
 * unit tests
 * deployed to heroku

### Additional
 * previous calculations stack
 * click to set equation input to previous calculation in stack
 * accumulate calculation mode
 * responsive with media queries

## Architecture

### Server
#### Response format
requests to the server return JSON containing the following fields
```
{
  msg: '5 + 3 calculated' // a brief description of the transaction
  data: '8' // the requested data
  err: 'null'  // error if encountered
}
```

#### Endpoints
method | path | body | action
--- | --- | --- | ---
GET | /operators | | get all operators
POST | /calculate | {operator: '+', operand1: 5, operand2: 3} | calculate an equation

#### Tests
Mocha is used as a testing framework for the back-end in collaboration with Chai assertion library and Chai HTTP for routes testing.

### Client
#### Equation input
 * an input for each operand
 * select for operators; retrieves operators from server on initialization
 * calculate button that posts equation to server

#### Previous calculations stack
 * previous calculations dipslayed through Angular Material list with most recent at top
 * clicks on calculations set clicked calculation as current equation input

#### Error handler
 * displays when an error is received from server due to invalid equation input

#### Browser and device compatibility
Front-end code is written using ES6 features and is transpiled with Babel to ensure compatibilty with all major browser versions.

The app is responsive and uses CCS3 media queries to ensure usablity on mobile devices and small screens.

#### Tests
Karma-Jasmine is used for front-end testing of Angular.

### Design considerations
As this is a small scale app, a fairly minimal file structure could have been used without sacrificing organization and readability.  However, I believe file structure is key to code clarity and seperation of concerns and want to show my ability to maintain modularity as a code base grows.

Express Routers are used to seperate front-end and back-end routes since they are being served by the same server. The Router allows easy mounting of back-end routes to `/api`.

I enjoy the style of dependency injection for including dependent objects like routes and Angular features. The design pattern reduces redundent dependency inclusions and makes objects more easily configurable. 
