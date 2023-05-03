const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const { config } = require('./config/variables');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();

app.use(express.json());

app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.serverPort, () => {
  console.log(`corriendo en el puerto ${config.serverPort}`);
});