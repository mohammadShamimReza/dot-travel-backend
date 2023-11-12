import { z } from 'zod';

const create = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'name id is required',
    }),
    lastName: z.string({
      required_error: 'name id is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    role: z.string({
      required_error: 'role is required',
    }),
    phone: z.string({
      required_error: 'phone is required',
    }),

    address: z.string({
      required_error: 'address is required',
    }),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

export const AuthValidation = {
  create,
  login,
};
