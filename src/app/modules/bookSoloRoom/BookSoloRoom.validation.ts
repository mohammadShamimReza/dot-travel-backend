import { z } from 'zod';

const createBookedSoloRoom = z.object({
  body: z.object({
    Form: z.string({ required_error: 'Form date is required' }),
    to: z.string({ required_error: 'To date is required' }),
    userId: z.string({ required_error: 'User ID is required' }),
    soloRoomId: z.string({ required_error: 'Solo Room ID is required' }),
  }),
});

const updateBookedSoloRoom = z.object({
  body: z.object({
    Form: z.string().optional(),
    to: z.string().optional(),
    userId: z.string().optional(),
    soloRoomId: z.string().optional(),
  }),
});

export const bookedSoloRoomValidation = {
  createBookedSoloRoom,
  updateBookedSoloRoom,
};
