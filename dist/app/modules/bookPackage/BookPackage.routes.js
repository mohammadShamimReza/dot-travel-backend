"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookdPackageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const BookPackage_controller_1 = require("./BookPackage.controller");
const BookPackage_validation_1 = require("./BookPackage.validation");
const router = express_1.default.Router();
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), BookPackage_controller_1.BookPackageController.getById);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), BookPackage_controller_1.BookPackageController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(BookPackage_validation_1.bookedPackageValidation.createBookedPackage), BookPackage_controller_1.BookPackageController.createBookPackage);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(BookPackage_validation_1.bookedPackageValidation.updateBookedPackage), BookPackage_controller_1.BookPackageController.updateBookPackage);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), BookPackage_controller_1.BookPackageController.deleteBookPackage);
exports.BookdPackageRoutes = router;
