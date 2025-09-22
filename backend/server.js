require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
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

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port ' + process.env.PORT);
    })
  })
  .catch((error) => {
    console.error(error);
  })

