# calculator
an EAN stack app using 
  * Node - server runtime environment
  * Express - routing
  * Angular - front-end framework
 
[Visit the app on Heroku](http://calculator-ankihg.herokuapp.com/)

## features
### mvp
 * drop down menu to select operators retrieved from server
 * input for two operands
 * calcuation button that posts equation to server to retrieve result of calculation
 * unit tests
 * deployed to heroku

### additional
 * previous calculations stack
 * click to set equation input to previous calculation in stack
 * accumulate calculation mode
 * responsive with media queries

## architecture

### server
#### response format
requests to the server return JSON containing the following fields
```
{
  msg: '5 + 3 calculated' // a brief description of the transaction
  data: '8' // the requested data
  err: 'null'  // error if encountered
}
```

#### endpoints
method | path | body | action
--- | --- | --- | ---
GET | /operators | | get all operators
POST | /calculate | {operator: '+', operand1: 5, operand2: 3} | calculate an equation

#### tests
Mocha is used as a testing framework for the back-end in collaboration with Chai assertion library and Chai HTTP for routes testing.

### client
#### equation input
 * an input for each operand
 * select for operators; retrieves operators from server on initialization
 * calculate button that posts equation to server

#### previous calculations stack
 * previous calculations dipslayed through Angular Material list with most recent at top
 * clicks on calculations set clicked calculation as current equation input

#### error handler
 * displays when an error is received from server due to invalid equation input

#### browser and device compatibility
Front-end code is written using ES6 features and is transpiled with Babel to ensure compatibilty with all major browser versions.

The app is responsive and uses CCS3 media queries to ensure usablity on mobile devices and small screens.

#### tests
Karma-Jasmine is used for front-end testing of Angular.

### design considerations
Since this is a small scale app I could have used a fairly minimal file structure without sacrificing organization and readability.  However, I believe good file structure is key to seperation of concerns and code clarity and wanted to show my ability to maintain modularity as a code base grows.
