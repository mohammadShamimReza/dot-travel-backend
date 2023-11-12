import { z } from 'zod';

const create = z.object({
  body: z.object({
    firstName: z.string({ required_error: 'firstName is required' }),
    lastName: z.string({ required_error: 'firstName is required' }),
    email: z.string({ required_error: 'firstName is required' }),
    password: z.string({ required_error: 'firstName is required' }),
    phone: z.string({ required_error: 'firstName is required' }),
    role: z.string({ required_error: 'firstName is required' }),

    address: z.string({ required_error: 'firstName is required' }),
  }),
});

const update = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    role: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    prifileImage: z.string().optional(),
  }),
});

export const UserValidation = {
  create,
  update,
};
