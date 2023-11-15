"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const PackageReviewRating_controller_1 = require("./PackageReviewRating.controller");
const PackageReviewRating_validation_1 = require("./PackageReviewRating.validation");
const router = express_1.default.Router();
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), PackageReviewRating_controller_1.PackageReviewRatingController.getById);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
PackageReviewRating_controller_1.PackageReviewRatingController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(PackageReviewRating_validation_1.packageReviewAndRatingValidation.createPackageReviewAndRating), PackageReviewRating_controller_1.PackageReviewRatingController.createPackageReviewRating);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(PackageReviewRating_validation_1.packageReviewAndRatingValidation.updatePackageReviewAndRating), PackageReviewRating_controller_1.PackageReviewRatingController.updatePackageReviewRating);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), PackageReviewRating_controller_1.PackageReviewRatingController.deletePackageReviewRating);
exports.PackageReviewRoutes = router;
