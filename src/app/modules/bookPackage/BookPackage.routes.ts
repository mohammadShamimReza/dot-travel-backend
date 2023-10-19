import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { BookPackageController } from './BookPackage.controller';
import { bookedPackageValidation } from './BookPackage.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookPackageController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookPackageController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(bookedPackageValidation.createBookedPackage),
  BookPackageController.createBookPackage,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(bookedPackageValidation.updateBookedPackage),
  BookPackageController.updateBookPackage,
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookPackageController.deleteBookPackage,
);

export const BookdPackageRoutes = router;
