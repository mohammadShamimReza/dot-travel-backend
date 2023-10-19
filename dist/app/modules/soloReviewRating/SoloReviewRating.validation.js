"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloReviewAndRatingValidation = void 0;
const zod_1 = require("zod");
const createSoloReviewAndRating = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({ required_error: 'Review is required' }),
        rating: zod_1.z.string({ required_error: 'Rating is required' }),
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        soloRoomId: zod_1.z.string({ required_error: 'Solo Room ID is required' }),
    }),
});
const updateSoloReviewAndRating = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string().optional(),
        rating: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        soloRoomId: zod_1.z.string().optional(),
    }),
});
exports.SoloReviewAndRatingValidation = {
    createSoloReviewAndRating,
    updateSoloReviewAndRating,
};
