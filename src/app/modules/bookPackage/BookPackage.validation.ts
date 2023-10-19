import { z } from 'zod';

const createBookedPackage = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User ID is required' }),
    packageId: z.string({ required_error: 'Package ID is required' }),
  }),
});
const updateBookedPackage = z.object({
  body: z.object({
    userId: z.string().optional(),
    packageId: z.string().optional(),
  }),
});

export const bookedPackageValidation = {
  createBookedPackage,
  updateBookedPackage,
};
