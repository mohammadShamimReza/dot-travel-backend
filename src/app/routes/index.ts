import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';

import { packageRoutes } from '../modules/package/Package.routes';
import { packageCategoryRoutes } from '../modules/packageCategory/PackageCategory.routes';
import { profileRoutes } from '../modules/profile/Profile.routes';
import { userRoutes } from '../modules/user/User.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/users',
    routes: userRoutes,
  },
  {
    path: '/profile',
    routes: profileRoutes,
  },
  {
    path: '/packages',
    routes: packageRoutes,
  },
  {
    path: '/packages',
    routes: packageCategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
