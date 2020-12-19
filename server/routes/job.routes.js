const express = require('express');
const router = express.Router();
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require('../controllers/job.controller');

router
  .get('/', getJobs)
  .get('/:id', getJobs)
  .post('/', addJob)
  .put('/:id', updateJob)
  .delete('/:id', deleteJob);
module.exports = router;
