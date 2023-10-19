"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartPackageCalidation = void 0;
const zod_1 = require("zod");
const createAddToCartPackage = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({ required_error: 'userId is required' }),
        packageId: zod_1.z.string({ required_error: 'packageId is required' }),
    }),
});
exports.AddToCartPackageCalidation = {
    createAddToCartPackage,
};
