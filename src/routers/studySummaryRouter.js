const router = require('express').Router();

const {
  createSummaries,
} = require('../controllers/studySummaryControllers');

router.post('/', createSummaries);

module.exports = router;