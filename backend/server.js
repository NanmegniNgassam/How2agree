require('dotenv').config();


const express = require('express');
const freedyRoutes = require('./routes/freedies');

// create the express app
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
})

// routes
app.use('/api/freedies', freedyRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
})