const express = require('express');
const router = express.Router();
const {
  getRecruiters,
  addRecruiter,
  updateRecruiter,
  deleteRecruiter,
} = require('../controllers/recruiter.controller');
// const redisCacheMiddleware = require('express-redis-cache-middleware');
// const options = {};
// const { cacheMiddleware } = redisCacheMiddleware(options);

router
  .get('/', getRecruiters)
  .get('/:id', getRecruiters)
  .post('/', addRecruiter)
  .put('/:id', updateRecruiter)
  .delete('/:id', deleteRecruiter);

module.exports = router;
