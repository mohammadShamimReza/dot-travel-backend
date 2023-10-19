import { z } from 'zod';

const createSoloRoom = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    price: z.number({ required_error: 'Price is required' }),
    numberOfRooms: z.number({ required_error: 'Number of rooms is required' }),
    district: z.string({ required_error: 'District is required' }),
    division: z.string({ required_error: 'Division is required' }),
    village: z.string({ required_error: 'Village is required' }),
    address: z.string({ required_error: 'Address is required' }),
    status: z.enum(['available', 'unavailable'], {
      required_error: 'Status is required',
    }),
    roomImage: z.string().optional(),
    image_public_id: z.string({
      required_error: 'Image public id is required',
    }),
    roadNumber: z.string().optional(),
  }),
});

const updateSoloRoom = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    numberOfRooms: z.number().optional(),
    district: z.string().optional(),
    division: z.string().optional(),
    village: z.string().optional(),
    address: z.string().optional(),
    status: z.enum(['available', 'unavailable']).optional(),
    roomImage: z.string().optional(),
    image_public_id: z.string().optional(),
    roadNumber: z.string().optional(),
  }),
});

export const SoloRoomValidation = {
  createSoloRoom,
  updateSoloRoom,
};
