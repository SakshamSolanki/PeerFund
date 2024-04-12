const express = require('express');
const cors = require('cors');

const config = require('./config.js');

const app = express();

app.use(cors());
app.use(express.json());


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);