const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/data');
const app = express();
const port = 3001;

/** Enable cors */
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/event', require('../routes/chambre.routes'));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

