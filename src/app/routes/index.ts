import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';

import { BookdPackageRoutes } from '../modules/bookPackage/BookPackage.routes';
import { BookSoloRoomRoutes } from '../modules/bookSoloRoom/BookSoloRoom.routes';
import { packageRoutes } from '../modules/package/Package.routes';
import { packageCategoryRoutes } from '../modules/packageCategory/PackageCategory.routes';
import { PackageReviewRoutes } from '../modules/packageReviewRating/PackageReviewRating.routes';
import { profileRoutes } from '../modules/profile/Profile.routes';
import { SoloReviewRoutes } from '../modules/soloReviewRating/SoloReviewRating.routes';
import { SoloRoomRoutes } from '../modules/soloRoom/SoloRoom.routes';
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
    path: '/packages-category',
    routes: packageCategoryRoutes,
  },
  {
    path: '/booked-packages',
    routes: BookdPackageRoutes,
  },
  {
    path: '/solo-room',
    routes: SoloRoomRoutes,
  },
  {
    path: '/booked-solo-room',
    routes: BookSoloRoomRoutes,
  },
  {
    path: '/packages-Review',
    routes: PackageReviewRoutes,
  },
  {
    path: '/solo-review',
    routes: SoloReviewRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
