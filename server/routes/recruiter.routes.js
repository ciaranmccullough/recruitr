const express = require('express');
const router = express.Router();
const {
  getRecruiters,
  addRecruiter,
  updateRecruiter,
  deleteRecruiter,
} = require('../controllers/recruiter.controller');

router
  .get('/', getRecruiters)
  .get('/:id', getRecruiters)
  .post('/', addRecruiter)
  .put('/:id', updateRecruiter)
  .delete('/:id', deleteRecruiter);

module.exports = router;
