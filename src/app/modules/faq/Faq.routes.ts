import express from 'express';

import validateRequest from '../../middleware/validateRequest';
import { FaqController } from './Faq.controller';
import { FaqValidation } from './Faq.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  FaqController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  FaqController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(FaqValidation.createFaq),
  FaqController.createFaq,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(FaqValidation.updateFaq),
  FaqController.updateFaq,
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  FaqController.deleteFaq,
);

export const FaqRoutes = router;
