"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookedSoloRoomValidation = void 0;
const zod_1 = require("zod");
const createBookedSoloRoom = zod_1.z.object({
    body: zod_1.z.object({
        Form: zod_1.z.string({ required_error: 'Form date is required' }),
        to: zod_1.z.string({ required_error: 'To date is required' }),
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        soloRoomId: zod_1.z.string({ required_error: 'Solo Room ID is required' }),
    }),
});
const updateBookedSoloRoom = zod_1.z.object({
    body: zod_1.z.object({
        Form: zod_1.z.string().optional(),
        to: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        soloRoomId: zod_1.z.string().optional(),
    }),
});
exports.bookedSoloRoomValidation = {
    createBookedSoloRoom,
    updateBookedSoloRoom,
};
