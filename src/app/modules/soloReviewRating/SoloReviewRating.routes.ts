import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { SoloReviewAndRatingController } from './SoloReviewRating.controller';
import { SoloReviewAndRatingValidation } from './SoloReviewRating.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  SoloReviewAndRatingController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  SoloReviewAndRatingController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(SoloReviewAndRatingValidation.createSoloReviewAndRating),
  SoloReviewAndRatingController.createReviewAndRating,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(SoloReviewAndRatingValidation.updateSoloReviewAndRating),
  SoloReviewAndRatingController.updateReviewAndRating,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  SoloReviewAndRatingController.deleteReviewAndRating,
);

export const packageRoutes = router;
