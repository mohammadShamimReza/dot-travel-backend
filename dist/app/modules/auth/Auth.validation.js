"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({
            required_error: 'name id is required',
        }),
        lastName: zod_1.z.string({
            required_error: 'name id is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
        role: zod_1.z.string({
            required_error: 'role is required',
        }),
        phone: zod_1.z.string({
            required_error: 'phone is required',
        }),
        address: zod_1.z.string({
            required_error: 'address is required',
        }),
    }),
});
const login = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: 'Old password  is required',
        }),
        newPassword: zod_1.z.string({
            required_error: 'New password  is required',
        }),
    }),
});
exports.AuthValidation = {
    create,
    login,
    changePasswordZodSchema,
};
