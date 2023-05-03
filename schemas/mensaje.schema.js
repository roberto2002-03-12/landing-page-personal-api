const Joi = require('joi');

const nombres = Joi.string().max(100);
const apellidos = Joi.string().max(100);
const email = Joi.string().max(105);
const mensaje = Joi.string().max(255);
const codigoCaptcha = Joi.string();

const enviarMensajeSchema = Joi.object({
  nombres: nombres.required(),
  apellidos: apellidos.required(),
  email: email.required(),
  mensaje: mensaje.required(),
  tokenCaptcha: codigoCaptcha.required()
});

module.exports = {
  enviarMensajeSchema
}