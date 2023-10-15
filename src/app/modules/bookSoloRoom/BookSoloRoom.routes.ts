import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BookSoloRoomController } from './BookSoloRoom.controller';
import { bookedSoloRoomValidation } from './BookSoloRoom.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookSoloRoomController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookSoloRoomController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(bookedSoloRoomValidation.createBookedSoloRoom),
  BookSoloRoomController.createBookSoloRoom,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(bookedSoloRoomValidation.updateBookedSoloRoom),
  BookSoloRoomController.updateBookSoloRoom,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookSoloRoomController.deleteBookSoloRoom,
);

export const packageRoutes = router;
