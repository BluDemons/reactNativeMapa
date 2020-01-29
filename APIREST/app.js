const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const books = require('./ruta');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Bienvenidos a la APIMAPA!');
});
app.use('/api', books);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
