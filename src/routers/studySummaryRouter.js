const router = require('express').Router();

const {
  getAllSummaries,
  createSummaries,
} = require('../controllers/studySummaryControllers');

router.get('/', getAllSummaries);
router.post('/', createSummaries);

module.exports = router;