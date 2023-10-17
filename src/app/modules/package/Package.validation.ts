import { z } from 'zod';

const createPackage = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title  is required' }),
    description: z.string({ required_error: 'Title  is required' }),
    price: z.number({ required_error: 'Title  is required' }),
    from: z.string({ required_error: 'Title  is required' }),
    to: z.string({ required_error: 'Title  is required' }),
    status: z.enum(['inprogress', 'ongoing', 'ended']),
    packageImage: z.string().optional(),
    maxUser: z.number({ required_error: 'Title  is required' }),
    packageCategoryId: z.string({ required_error: 'Title  is required' }),
    destination: z.string({ required_error: 'destination is required' }),
  }),
});

const updatePackage = z.object({
  body: z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    from: z.date().optional(),
    to: z.date().optional(),
    status: z.enum(['inprogress', 'ongoing', 'ended']).optional(), // Replace with actual status values
    packageImage: z.string().optional(), // Assuming image is an array of strings (URLs)
    destination: z.string().optional(),
  }),
});

export const packageValidation = {
  createPackage,
  updatePackage,
};
