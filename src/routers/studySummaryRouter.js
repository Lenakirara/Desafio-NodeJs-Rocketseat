const router = require('express').Router();

const {
  validateSummaries,
} = require('../middlewares/studySummaryValidation');

const {
  getAllSummaries,
  findSummaryById,
  createSummaries,
  updateSummary,
  deleteSummary,
} = require('../controllers/studySummaryControllers');

router.get('/:id', findSummaryById);
router.get('/', getAllSummaries);
router.post('/', validateSummaries, createSummaries);
router.put('/:id', updateSummary);
router.delete('/:id', deleteSummary);

module.exports = router;