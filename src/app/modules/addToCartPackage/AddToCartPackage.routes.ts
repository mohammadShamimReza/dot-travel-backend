import express from 'express';

import { AddToCartPackageController } from './AddToCartPackage.controller';

const router = express.Router();

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  AddToCartPackageController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(AddToCartPackageCalidation.createAddToCartPackage),
  AddToCartPackageController.createAddToCartPackage,
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  AddToCartPackageController.deleteAddToCartPackage,
);

export const AddToCartPackageRoutes = router;
