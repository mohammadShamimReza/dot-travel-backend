"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Blog_controller_1 = require("./Blog.controller");
const Blog_validation_1 = require("./Blog.validation");
const router = express_1.default.Router();
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Blog_controller_1.BlogController.getById);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Blog_controller_1.BlogController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Blog_validation_1.BlogValidation.createBlog), Blog_controller_1.BlogController.createBlog);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Blog_validation_1.BlogValidation.updateBlog), Blog_controller_1.BlogController.updateBlog);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
