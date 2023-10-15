import { z } from 'zod';

const createPackage = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title  is required' }),
    description: z.string({ required_error: 'Title  is required' }),
    price: z.number({ required_error: 'Title  is required' }),
    from: z.date({ required_error: 'Title  is required' }),
    to: z.date({ required_error: 'Title  is required' }),
    status: z.enum(['inprogress', 'ongoing', 'ended']),
    image: z.array(z.string()),
    maxUser: z.number({ required_error: 'Title  is required' }),
    packageCategoryId: z.string({ required_error: 'Title  is required' }),
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
    image: z.array(z.string()).optional(), // Assuming image is an array of strings (URLs)
  }),
});

export const packageValidation = {
  createPackage,
  updatePackage,
};
