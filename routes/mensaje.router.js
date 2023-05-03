const express = require('express');
const { validationHandler } = require('../middleware/validator.handler');
const { createMessage } = require('../services/mensaje.service');
const { enviarMensajeSchema } = require('../schemas/mensaje.schema');
const router = express.Router();

router.post('/',
  validationHandler(enviarMensajeSchema, 'body'),
  async (req, res, next) => {
    try {
      const obj = req.body;
      await createMessage(obj);
      res.status(201);
    } catch (err) {
      next(err);
    }
  }
)

module.exports = router;