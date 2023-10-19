import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BlogController } from './Blog.controller';
import { BlogValidation } from './Blog.validation';

const router = express.Router();

router.get('/:id', BlogController.getById);

router.get('/', BlogController.getAllFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.createBlog),
  BlogController.createBlog,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BlogValidation.updateBlog),
  BlogController.updateBlog,
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
