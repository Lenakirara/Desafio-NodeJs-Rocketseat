const router = require('express').Router();

const {
  validateJWTToken
} = require('../middlewares/jwtTokenValidation');

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
router.post('/', validateJWTToken, validateSummaries, createSummaries);
router.put('/:id', validateJWTToken, updateSummary);
router.delete('/:id', validateJWTToken, deleteSummary);

module.exports = router;