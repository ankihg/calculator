'use strict';
module.exports = (router, models) => {

  const {operators, Calculation} = models;

  router.route('/calculate')
    .post((req, res) => {
      [req.body.operand1, req.body.operand2] = [parseFloat(req.body.operand1), parseFloat(req.body.operand2)]
      if (!req.body.operand1 || !req.body.operand2) res.json({msg:'insufficient operands; cannot calculate', err: new Error('insufficient operands')});

      req.body.operator = operators[req.body.operator];
      if (!req.body.operator) res.json({msg:'insufficient operator; cannot calculate', err: new Error('insufficient operator')});

      let calc = new Calculation(req.body);
      res.json({msg:`${req.body.operand1} ${req.body.operator.symb} ${req.body.operand2} calculated`, data:calc.apply()});
    });

}
