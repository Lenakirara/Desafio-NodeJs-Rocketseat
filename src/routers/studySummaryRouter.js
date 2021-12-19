const router = require('express').Router();

const {
  getAllSummaries,
  findSummaryById,
  createSummaries,
  updateSummary,
} = require('../controllers/studySummaryControllers');

router.get('/:id', findSummaryById);
router.get('/', getAllSummaries);
router.post('/', createSummaries);
router.put('/:id', updateSummary);

module.exports = router;