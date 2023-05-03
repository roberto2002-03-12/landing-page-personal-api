require('dotenv').config();

const config = {
  emailRecype: process.env.EMAIL_RECYPE,
  passRecype: process.env.PASS_RECYPE,
  captchaCode: process.env.CAPTCHA_CODE,
  emailToSend: process.env.EMAIL_TO_SEND,
  serverPort: process.env.PORT
}

module.exports = {
  config
}