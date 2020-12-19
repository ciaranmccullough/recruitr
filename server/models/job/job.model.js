const mongoose = require('mongoose');
const {
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = mongoose;

const JobSchema = new Schema({
  title: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
  posted: { type: Date, required: true },
  agency: { type: String, required: true },
  description: { type: String, required: true },
  job_type: { type: String, required: true },
  start_date: { type: Date, required: true },
  // contract_length: { type: Number, required: true },
  // contact_name: { type: String, required: true },
  // ref: { type: String, required: true },
  // owner: { type: ObjectId, ref: 'Recruiter' },
});

Job = mongoose.model('Job', JobSchema);

module.exports = Job;
