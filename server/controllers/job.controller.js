const Job = require('../models/job/job.model');
const errorHandler = require('./utils');

// Get jobs
exports.getJobs = async function(req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  await Job.find(query)
    .populate('owner')
    .exec((err, jobs) => {
      if (err) return errorHandler(res, err);
      console.log('Getting data...');
      return res.status(200).json(jobs);
    });
};

// Add a job
exports.addJob = function(req, res) {
  const jobData = req.body;
  console.log('jobData', jobData);
  const job = new Job(jobData);
  job.save((err, job) => {
    if (err) return errorHandler(res, err);
    else return res.status(201).json(job);
  });
};

// Update a job
exports.updateJob = async function(req, res) {
  await Job.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
};

// Delete a job
exports.deleteJob = function(req, res) {
  Job.deleteOne({ _id: req.params.id }, (err) => {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
};
