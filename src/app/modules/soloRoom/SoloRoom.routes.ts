import express from 'express';

import validateRequest from '../../middleware/validateRequest';
import { SoloRoomController } from './SoloRoom.controller';
import { SoloRoomValidation } from './SoloRoom.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  SoloRoomController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  SoloRoomController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(SoloRoomValidation.createSoloRoom),
  SoloRoomController.createPackage,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(SoloRoomValidation.updateSoloRoom),
  SoloRoomController.updatePackage,
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  SoloRoomController.deletePackage,
);

export const packageRoutes = router;
