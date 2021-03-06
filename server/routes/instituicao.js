'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers.instituicao;
  const router = express.Router();

  /** exige que tenha o header Authorization na requisição */
  //router.use(passport.authenticate('jwt', { session: false }));

  router.get('/', controller.findAll);
  router.post('/', controller.create);
  router.get('/:id', controller.find);
  router.put('/:id', controller.update);

  app.use('/instituicao', router)
};
