import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { FaqController } from './Faq.controller';
import { FaqValidation } from './Faq.validation';

const router = express.Router();

router.get('/:id', FaqController.getById);

router.get('/', FaqController.getAllFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(FaqValidation.createFaq),
  FaqController.createFaq,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(FaqValidation.updateFaq),
  FaqController.updateFaq,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FaqController.deleteFaq,
);

export const FaqRoutes = router;
