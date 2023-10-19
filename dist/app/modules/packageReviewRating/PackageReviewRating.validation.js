"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageReviewAndRatingValidation = void 0;
const zod_1 = require("zod");
const createPackageReviewAndRating = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({ required_error: 'Review is required' }),
        rating: zod_1.z.string({ required_error: 'Rating is required' }),
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        packageId: zod_1.z.string({ required_error: 'Package ID is required' }),
    }),
});
const updatePackageReviewAndRating = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string().optional(),
        rating: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        packageId: zod_1.z.string().optional(),
    }),
});
exports.packageReviewAndRatingValidation = {
    createPackageReviewAndRating,
    updatePackageReviewAndRating,
};
