"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartPackageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const AddToCartPackage_controller_1 = require("./AddToCartPackage.controller");
const AddToCartPackage_validation_1 = require("./AddToCartPackage.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.SUPER_ADMIN), AddToCartPackage_controller_1.AddToCartPackageController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(AddToCartPackage_validation_1.AddToCartPackageCalidation.createAddToCartPackage), AddToCartPackage_controller_1.AddToCartPackageController.createAddToCartPackage);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), AddToCartPackage_controller_1.AddToCartPackageController.deleteAddToCartPackage);
exports.AddToCartPackageRoutes = router;
