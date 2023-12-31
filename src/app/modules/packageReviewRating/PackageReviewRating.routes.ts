import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PackageReviewRatingController } from './PackageReviewRating.controller';
import { packageReviewAndRatingValidation } from './PackageReviewRating.validation';

const router = express.Router();

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  PackageReviewRatingController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  PackageReviewRatingController.getAllFromDB,
);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(
    packageReviewAndRatingValidation.createPackageReviewAndRating,
  ),
  PackageReviewRatingController.createPackageReviewRating,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(
    packageReviewAndRatingValidation.updatePackageReviewAndRating,
  ),
  PackageReviewRatingController.updatePackageReviewRating,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  PackageReviewRatingController.deletePackageReviewRating,
);

export const PackageReviewRoutes = router;
