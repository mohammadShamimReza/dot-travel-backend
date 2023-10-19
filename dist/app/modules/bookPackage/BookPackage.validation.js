"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookedPackageValidation = void 0;
const zod_1 = require("zod");
const createBookedPackage = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        packageId: zod_1.z.string({ required_error: 'Package ID is required' }),
    }),
});
const updateBookedPackage = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        packageId: zod_1.z.string().optional(),
    }),
});
exports.bookedPackageValidation = {
    createBookedPackage,
    updateBookedPackage,
};
