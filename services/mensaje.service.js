const nodemailer = require('nodemailer');
const { config } = require('../config/variables');
const axios = require('axios').default;

const sendMessage = async (dataMail) => {
  //ToDo configurar para obtener SSL en correos
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
      user: config.emailRecype,
      pass: config.passRecype
    },
    tls: {
      rejectUnauthorized: true
    }
  });

  await transporter.sendMail(dataMail);

  return {
    mensaje: 'Email enviado'
  };
};

const authHuman = async (obj) => {
  const respuesta = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.captchaCode}&response=${obj.captchaToken}`
  );

  if (respuesta.data.success === false) return false;

  return true;
};

const createMessage = async (message) => {
  let texto = 
    `Este es un mensaje de ${message.nombres} ${message.apellidos}
    con el correo ${message.email} y dice lo siguiente:
    
    ${message.mensaje}`;
  
  const emailInfo = {
    from: config.emailRecype,
    to: `${config.emailToSend}`,
    subject: 'Oportunidad de trabajo o proyecto',
    text: texto
  };
  //ToDo agregar el codigo captcha al schema de mensaje
  const validation = await authHuman(message.tokenCaptcha);

  if (!validation) throw boom.badRequest('Por favor verifique que es humano')

  const respond = await sendMessage(emailInfo);
  return respond;
};

module.exports = {
  createMessage
}