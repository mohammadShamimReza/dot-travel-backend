'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require('express'));
const user_1 = require('../../../enums/user');
const auth_1 = __importDefault(require('../../middleware/auth'));
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
);
const Category_controller_1 = require('./Category.controller');
const Category_validation_1 = require('./Category.validation');
const router = express_1.default.Router();
router.get('/', Category_controller_1.CategoryController.getAllFromDB);
router.get('/:id', Category_controller_1.CategoryController.getById);
router.post(
  '/create-category',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  Category_controller_1.CategoryController.insertIntoDB,
);
router.patch(
  '/:id',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(
    Category_validation_1.CategoryValidation.update,
  ),
  Category_controller_1.CategoryController.updateCategory,
);
router.delete(
  '/:id',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  Category_controller_1.CategoryController.deleteCategory,
);
exports.categoryRoutes = router;
