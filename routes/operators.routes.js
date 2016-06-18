'use strict';
module.exports = (router, models) => {

  router.route('/operators')
    .get((req, res) => {
      res.status(200).json({msg: 'all operators', data: models.operators});
    });

}
