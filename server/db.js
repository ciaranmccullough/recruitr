const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@cluster0.o3kjh.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;

const promise = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(function(db) {
    console.log('DATABASE CONNECTED!!');
  })
  .catch(function(err) {
    console.log('CONNECTION ERROR', err);
  });
