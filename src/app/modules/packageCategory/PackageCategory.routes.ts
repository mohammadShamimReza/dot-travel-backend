import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PackageController } from './PackageCategory.controller';
import { packageValidation } from './PackageCategory.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  PackageController.createPackage,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  PackageController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(packageValidation.createPackage),
  PackageController.createPackage,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(packageValidation.updatePackage),
  PackageController.updatePackage,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PackageController.deletePackage,
);

export const packageRoutes = router;
