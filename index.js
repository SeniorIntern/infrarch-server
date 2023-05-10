require('dotenv').config();
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/prod')(app);

// listen for connections
const port = process.env.PORT || 5001;
app.listen(port, () => {
  winston.info(`listening on port: ${port}...`);
});
