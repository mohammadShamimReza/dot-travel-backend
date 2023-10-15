'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require('express'));
const user_1 = require('../../../enums/user');
const auth_1 = __importDefault(require('../../middleware/auth'));
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
);
const Book_controller_1 = require('./Book.controller');
const Book_validation_1 = require('./Book.validation');
const router = express_1.default.Router();
router.get('/', Book_controller_1.BookController.getAllFromDB);
router.get('/:id', Book_controller_1.BookController.getById);
router.get(
  '/:categoryId/category',
  Book_controller_1.BookController.getByCategoryId,
);
router.post(
  '/create-book',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(Book_validation_1.BookValidation.create),
  Book_controller_1.BookController.insertIntoDB,
);
router.patch(
  '/:id',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  (0, validateRequest_1.default)(Book_validation_1.BookValidation.update),
  Book_controller_1.BookController.updateBook,
);
router.delete(
  '/:id',
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  Book_controller_1.BookController.deleteBook,
);
exports.bookRoutes = router;
