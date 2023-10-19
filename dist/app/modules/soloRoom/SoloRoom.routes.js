"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloRoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const SoloRoom_controller_1 = require("./SoloRoom.controller");
const SoloRoom_validation_1 = require("./SoloRoom.validation");
const router = express_1.default.Router();
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
SoloRoom_controller_1.SoloRoomController.getById);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN),
SoloRoom_controller_1.SoloRoomController.getAllFromDB);
router.post('/', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(SoloRoom_validation_1.SoloRoomValidation.createSoloRoom), SoloRoom_controller_1.SoloRoomController.createPackage);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(SoloRoom_validation_1.SoloRoomValidation.updateSoloRoom), SoloRoom_controller_1.SoloRoomController.updatePackage);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
SoloRoom_controller_1.SoloRoomController.deletePackage);
exports.SoloRoomRoutes = router;
