"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Faq_controller_1 = require("./Faq.controller");
const Faq_validation_1 = require("./Faq.validation");
const router = express_1.default.Router();
router.get('/:id', Faq_controller_1.FaqController.getById);
router.get('/', Faq_controller_1.FaqController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(Faq_validation_1.FaqValidation.createFaq), Faq_controller_1.FaqController.createFaq);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(Faq_validation_1.FaqValidation.updateFaq), Faq_controller_1.FaqController.updateFaq);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), Faq_controller_1.FaqController.deleteFaq);
exports.FaqRoutes = router;
