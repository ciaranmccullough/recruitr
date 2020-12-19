const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecruiterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

Recruiter = mongoose.model('Recruiter', RecruiterSchema);

module.exports = Recruiter;
