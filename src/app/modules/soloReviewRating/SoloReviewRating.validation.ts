import { z } from 'zod';

const createSoloReviewAndRating = z.object({
  body: z.object({
    review: z.string({ required_error: 'Review is required' }),
    rating: z.string({ required_error: 'Rating is required' }),
    userId: z.string({ required_error: 'User ID is required' }),
    soloRoomId: z.string({ required_error: 'Solo Room ID is required' }),
  }),
});

const updateSoloReviewAndRating = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.string().optional(),
    userId: z.string().optional(),
    soloRoomId: z.string().optional(),
  }),
});

export const SoloReviewAndRatingValidation = {
  createSoloReviewAndRating,
  updateSoloReviewAndRating,
};
