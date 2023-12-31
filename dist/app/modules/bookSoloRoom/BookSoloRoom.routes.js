"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSoloRoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const BookSoloRoom_controller_1 = require("./BookSoloRoom.controller");
const BookSoloRoom_validation_1 = require("./BookSoloRoom.validation");
const router = express_1.default.Router();
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
BookSoloRoom_controller_1.BookSoloRoomController.getById);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN),
BookSoloRoom_controller_1.BookSoloRoomController.getAllFromDB);
router.post('/', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(BookSoloRoom_validation_1.bookedSoloRoomValidation.createBookedSoloRoom), BookSoloRoom_controller_1.BookSoloRoomController.createBookSoloRoom);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(BookSoloRoom_validation_1.bookedSoloRoomValidation.updateBookedSoloRoom), BookSoloRoom_controller_1.BookSoloRoomController.updateBookSoloRoom);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BookSoloRoom_controller_1.BookSoloRoomController.deleteBookSoloRoom);
exports.BookSoloRoomRoutes = router;
