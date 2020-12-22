const Recruiter = require('../models/recruiter/recruiter.model');
const { errorHandler } = require('./utils');

// Get recruiters
exports.getRecruiters = async function(req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  await Recruiter.find(query).exec((err, recruiters) => {
    if (err) return errorHandler(res, err);
    console.log('Getting data...');
    return res.status(200).json(recruiters);
  });
};

// Add recruiter
exports.addRecruiter = async function(req, res) {
  const recruiterData = req.body;
  console.log('recruiterData', recruiterData);
  const newRecruiter = await new Recruiter(recruiterData);
  newRecruiter.save((err, recruiter) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(recruiter);
  });
};

// Update recruiter
exports.updateRecruiter = function(req, res) {
  Recruiter.updateOne({ _id: req.params.id }, req.body, (err, result) => {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
};

// Delete recruiter
exports.deleteRecruiter = function(req, res) {
  Recruiter.deleteOne({ _id: req.params.id }, (err) => {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
};
