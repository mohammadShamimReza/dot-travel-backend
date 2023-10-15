import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PackageCategoryController } from './PackageCategory.controller';
import { packageCategoryValidation } from './PackageCategory.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  PackageCategoryController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  PackageCategoryController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(packageCategoryValidation.createPackageCategory),
  PackageCategoryController.createPackageCategory,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(packageCategoryValidation.updatePackageCategory),
  PackageCategoryController.updatePackageCategory,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PackageCategoryController.deletePackageCategory,
);

export const packageCategoryRoutes = router;
