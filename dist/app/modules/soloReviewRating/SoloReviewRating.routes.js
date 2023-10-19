"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const SoloReviewRating_controller_1 = require("./SoloReviewRating.controller");
const SoloReviewRating_validation_1 = require("./SoloReviewRating.validation");
const router = express_1.default.Router();
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
SoloReviewRating_controller_1.SoloReviewAndRatingController.getById);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN),
SoloReviewRating_controller_1.SoloReviewAndRatingController.getAllFromDB);
router.post('/', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(SoloReviewRating_validation_1.SoloReviewAndRatingValidation.createSoloReviewAndRating), SoloReviewRating_controller_1.SoloReviewAndRatingController.createReviewAndRating);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(SoloReviewRating_validation_1.SoloReviewAndRatingValidation.updateSoloReviewAndRating), SoloReviewRating_controller_1.SoloReviewAndRatingController.updateReviewAndRating);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), SoloReviewRating_controller_1.SoloReviewAndRatingController.deleteReviewAndRating);
exports.SoloReviewRoutes = router;
