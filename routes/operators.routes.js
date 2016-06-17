'use strict';
module.exports = (router, models) => {

  router.route('/operators')
    .get((req, res) => {
      res.json({msg: 'all operators', data: models.operators});
    });

}
