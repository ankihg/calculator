# calculator
an EAN stack app using 
  * Node - server runtime environment
  * Express - routing
  * Angular - front-end framework

## features
### mvp
 * drop down menu to select operators retrieved from server
 * input for two operands
 * calcuation button that posts equation to server to retrieve result of calculation
 * unit tests
 * deployed to heroku

### additional
 * previous calculations stack
 * set equation input to previous calculation in stack

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
