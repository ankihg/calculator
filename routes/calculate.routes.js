'use strict';
module.exports = (router, models) => {

  const {operators, Calculation} = models;

  router.route('/calculate')
    .post((req, res) => {
      // parse the given operands
      [req.body.operand1, req.body.operand2] = [parseFloat(req.body.operand1), parseFloat(req.body.operand2)]
      // return error if insufficient operands
      if (!((req.body.operand1 || req.body.operand1 === 0) && (req.body.operand2 || req.body.operand2 === 0)))
        return res.status(400).json({msg:'insufficient operands', err: new Error('insufficient operands')});

      // get the operator object from the operator symbol given by request
      req.body.operator = operators[req.body.operator];
      // return error if insufficent operator
      if (!req.body.operator)
        return res.status(400).json({msg:'insufficient operator', err: new Error('insufficient operator')});

      // make a new calculation object and respond with result of calculation
      let calc = new Calculation(req.body);
      res.status(200).json({msg:`${req.body.operand1} ${req.body.operator.symb} ${req.body.operand2} calculated`, data:calc.apply().toString()});
    });

}
