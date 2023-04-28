require('dotenv').config();

const config = {
  emailUser: process.env.EMAIL_USER,
  emailCode: process.env.EMAIL_CODE,
  captchaCode: process.env.CAPTCHA_CODE,
  emailToSend: process.env.EMAIL_TO_SEND
}

module.exports = {
  config
}