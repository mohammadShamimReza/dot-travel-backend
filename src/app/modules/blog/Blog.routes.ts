import express from 'express';

import validateRequest from '../../middleware/validateRequest';
import { BlogController } from './Blog.controller';
import { BlogValidation } from './Blog.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BlogController.getById,
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  BlogController.getAllFromDB,
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.createBlog),
  BlogController.createBlog,
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.updateBlog),
  BlogController.updateBlog,
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BlogController.deleteBlog,
);

export const BlogRoutes = router;
