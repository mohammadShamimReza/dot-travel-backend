import { z } from 'zod';

const createAddToCartPackage = z.object({
  body: z.object({
    userId: z.string({ required_error: 'userId is required' }),
    packageId: z.string({ required_error: 'packageId is required' }),
  }),
});

export const AddToCartPackageCalidation = {
  createAddToCartPackage,
};
