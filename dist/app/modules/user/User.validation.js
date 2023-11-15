"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({ required_error: 'firstName is required' }),
        lastName: zod_1.z.string({ required_error: 'firstName is required' }),
        email: zod_1.z.string({ required_error: 'firstName is required' }),
        password: zod_1.z.string({ required_error: 'firstName is required' }),
        phone: zod_1.z.string({ required_error: 'firstName is required' }),
        role: zod_1.z.string({ required_error: 'firstName is required' }),
        address: zod_1.z.string({ required_error: 'firstName is required' }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        prifileImage: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    create,
    update,
};
