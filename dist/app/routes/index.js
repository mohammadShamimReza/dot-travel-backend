"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_routes_1 = require("../modules/auth/Auth.routes");
const AddToCartPackage_routes_1 = require("../modules/addToCartPackage/AddToCartPackage.routes");
const Blog_routes_1 = require("../modules/blog/Blog.routes");
const BookPackage_routes_1 = require("../modules/bookPackage/BookPackage.routes");
const BookSoloRoom_routes_1 = require("../modules/bookSoloRoom/BookSoloRoom.routes");
const Faq_routes_1 = require("../modules/faq/Faq.routes");
const Package_routes_1 = require("../modules/package/Package.routes");
const PackageReviewRating_routes_1 = require("../modules/packageReviewRating/PackageReviewRating.routes");
const Profile_routes_1 = require("../modules/profile/Profile.routes");
const SoloReviewRating_routes_1 = require("../modules/soloReviewRating/SoloReviewRating.routes");
const SoloRoom_routes_1 = require("../modules/soloRoom/SoloRoom.routes");
const User_routes_1 = require("../modules/user/User.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: Auth_routes_1.authRoutes,
    },
    {
        path: '/users',
        routes: User_routes_1.userRoutes,
    },
    {
        path: '/profile',
        routes: Profile_routes_1.profileRoutes,
    },
    {
        path: '/packages',
        routes: Package_routes_1.packageRoutes,
    },
    {
        path: '/booked_packages',
        routes: BookPackage_routes_1.BookdPackageRoutes,
    },
    {
        path: '/solo-room',
        routes: SoloRoom_routes_1.SoloRoomRoutes,
    },
    {
        path: '/booked-solo-room',
        routes: BookSoloRoom_routes_1.BookSoloRoomRoutes,
    },
    {
        path: '/packages-Review',
        routes: PackageReviewRating_routes_1.PackageReviewRoutes,
    },
    {
        path: '/solo-review',
        routes: SoloReviewRating_routes_1.SoloReviewRoutes,
    },
    {
        path: '/blog',
        routes: Blog_routes_1.BlogRoutes,
    },
    {
        path: '/faq',
        routes: Faq_routes_1.FaqRoutes,
    },
    {
        path: '/add_to_cart_package',
        routes: AddToCartPackage_routes_1.AddToCartPackageRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
