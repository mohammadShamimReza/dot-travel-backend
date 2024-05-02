"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageValidation = void 0;
const zod_1 = require("zod");
const createPackage = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title  is required' }),
        description: zod_1.z.string({ required_error: 'description  is required' }),
        price: zod_1.z.number({ required_error: 'price is required' }),
        from: zod_1.z.string({ required_error: 'from  is required' }),
        to: zod_1.z.string({ required_error: 'to  is required' }),
        // status: z.enum(['inprogress', 'ongoing', 'ended']),
        packageImage: zod_1.z.string().optional(),
        maxCustomer: zod_1.z.number({ required_error: 'maxCustomer  is required' }),
        destination: zod_1.z.string({ required_error: 'destination is required' }),
    }),
});
const updatePackage = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        from: zod_1.z.string().optional(),
        to: zod_1.z.string().optional(),
        // status: z.enum(['inprogress', 'ongoing', 'ended']).optional(), // Replace with actual status values
        packageImage: zod_1.z.string().optional(),
        destination: zod_1.z.string().optional(),
    }),
});
exports.packageValidation = {
    createPackage,
    updatePackage,
};
