import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BookPackageController } from './BookPackage.controller';
import { bookedPackageValidation } from './BookPackage.validation';

const router = express.Router();

router.get('/:id', auth(ENUM_USER_ROLE.USER), BookPackageController.getById);

router.get('/', auth(ENUM_USER_ROLE.USER), BookPackageController.getAllFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(bookedPackageValidation.createBookedPackage),
  BookPackageController.createBookPackage,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(bookedPackageValidation.updateBookedPackage),
  BookPackageController.updateBookPackage,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  BookPackageController.deleteBookPackage,
);

export const BookdPackageRoutes = router;
