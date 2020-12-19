const app = require('./app');

const PORT = 5000 || process.env.PORT;

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});
