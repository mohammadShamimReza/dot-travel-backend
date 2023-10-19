"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloRoomValidation = void 0;
const zod_1 = require("zod");
const createSoloRoom = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        price: zod_1.z.number({ required_error: 'Price is required' }),
        numberOfRooms: zod_1.z.number({ required_error: 'Number of rooms is required' }),
        district: zod_1.z.string({ required_error: 'District is required' }),
        division: zod_1.z.string({ required_error: 'Division is required' }),
        village: zod_1.z.string({ required_error: 'Village is required' }),
        address: zod_1.z.string({ required_error: 'Address is required' }),
        status: zod_1.z.enum(['available', 'unavailable'], {
            required_error: 'Status is required',
        }),
        roomImage: zod_1.z.string().optional(),
        image_public_id: zod_1.z.string({
            required_error: 'Image public id is required',
        }),
        roadNumber: zod_1.z.string().optional(),
    }),
});
const updateSoloRoom = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        numberOfRooms: zod_1.z.number().optional(),
        district: zod_1.z.string().optional(),
        division: zod_1.z.string().optional(),
        village: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        status: zod_1.z.enum(['available', 'unavailable']).optional(),
        roomImage: zod_1.z.string().optional(),
        image_public_id: zod_1.z.string().optional(),
        roadNumber: zod_1.z.string().optional(),
    }),
});
exports.SoloRoomValidation = {
    createSoloRoom,
    updateSoloRoom,
};
