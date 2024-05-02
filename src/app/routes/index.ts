import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';

import { AddToCartPackageRoutes } from '../modules/addToCartPackage/AddToCartPackage.routes';
import { BlogRoutes } from '../modules/blog/Blog.routes';
import { BookdPackageRoutes } from '../modules/bookPackage/BookPackage.routes';
import { BookSoloRoomRoutes } from '../modules/bookSoloRoom/BookSoloRoom.routes';
import { FaqRoutes } from '../modules/faq/Faq.routes';
import { packageRoutes } from '../modules/package/Package.routes';
import { PackageReviewRoutes } from '../modules/packageReviewRating/PackageReviewRating.routes';
import { profileRoutes } from '../modules/profile/Profile.routes';

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
    path: '/booked_packages',
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
    path: '/blog',
    routes: BlogRoutes,
  },
  {
    path: '/faq',
    routes: FaqRoutes,
  },
  {
    path: '/add_to_cart_package',
    routes: AddToCartPackageRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
