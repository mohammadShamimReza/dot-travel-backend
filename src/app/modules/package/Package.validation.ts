import { z } from 'zod';

const createPackage = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title  is required' }),
    description: z.string({ required_error: 'description  is required' }),
    price: z.number({ required_error: 'price is required' }),
    from: z.string({ required_error: 'from  is required' }),
    to: z.string({ required_error: 'to  is required' }),
    // status: z.enum(['inprogress', 'ongoing', 'ended']),
    packageImage: z.string().optional(),

    maxCustomer: z.number({ required_error: 'maxCustomer  is required' }),
    destination: z.string({ required_error: 'destination is required' }),
  }),
});

const updatePackage = z.object({
  body: z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    // status: z.enum(['inprogress', 'ongoing', 'ended']).optional(), // Replace with actual status values
    packageImage: z.string().optional(),
    destination: z.string().optional(),
  }),
});

export const packageValidation = {
  createPackage,
  updatePackage,
};
