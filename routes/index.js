const express = require('express');
const mensajeRouter = require('../routes/mensaje.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/landing-robertocg/v1', router);

  router.use('/mensajes', mensajeRouter);
};

module.exports = routerApi;