module.exports = function(app) {
  const API_ENDPOINT = '/api';
  const API_VERSION = 'v1';
  app.use(`${API_ENDPOINT}/${API_VERSION}/jobs`, require('./job.routes'));
};
