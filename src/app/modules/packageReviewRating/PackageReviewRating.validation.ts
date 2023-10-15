import { z } from 'zod';

const createPackageReviewAndRating = z.object({
  body: z.object({
    review: z.string({ required_error: 'Review is required' }),
    rating: z.string({ required_error: 'Rating is required' }),
    userId: z.string({ required_error: 'User ID is required' }),
    packageId: z.string({ required_error: 'Package ID is required' }),
  }),
});

const updatePackageReviewAndRating = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.string().optional(),
    userId: z.string().optional(),
    packageId: z.string().optional(),
  }),
});

export const packageReviewAndRatingValidation = {
  createPackageReviewAndRating,
  updatePackageReviewAndRating,
};
