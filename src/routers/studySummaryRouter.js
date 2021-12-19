const router = require('express').Router();

const {
  getAllSummaries,
  findSummaryById,
  createSummaries,
} = require('../controllers/studySummaryControllers');

router.get('/:id', findSummaryById);
router.get('/', getAllSummaries);
router.post('/', createSummaries);

module.exports = router;