import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AddToCartPackageController } from './AddToCartPackage.controller';
import { AddToCartPackageCalidation } from './AddToCartPackage.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.USER),
  AddToCartPackageController.getAllFromDB,
);
router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(AddToCartPackageCalidation.createAddToCartPackage),
  AddToCartPackageController.createAddToCartPackage,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  AddToCartPackageController.deleteAddToCartPackage,
);

export const AddToCartPackageRoutes = router;
