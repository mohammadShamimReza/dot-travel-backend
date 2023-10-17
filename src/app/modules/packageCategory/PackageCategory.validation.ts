import { z } from 'zod';

const createPackageCategory = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
  }),
});

const updatePackageCategory = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const packageCategoryValidation = {
  createPackageCategory,
  updatePackageCategory,
};
