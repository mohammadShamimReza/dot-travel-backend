import { BookedSoloRoom } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBookSoloRoom = async (
  payload: BookedSoloRoom,
): Promise<BookedSoloRoom> => {
  const result = await prisma.bookedSoloRoom.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<BookedSoloRoom[]> => {
  const result = await prisma.bookedSoloRoom.findMany({});
  return result;
};
const getById = async (id: string): Promise<BookedSoloRoom | null> => {
  const result = await prisma.bookedSoloRoom.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBookSoloRoom = async (
  id: string,
  payload: Partial<BookedSoloRoom>,
): Promise<BookedSoloRoom> => {
  const result = await prisma.bookedSoloRoom.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteBookSoloRoom = async (id: string): Promise<BookedSoloRoom> => {
  const result = await prisma.bookedSoloRoom.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookedSoloRoomService = {
  createBookSoloRoom,
  getAllFromDb,
  getById,
  updateBookSoloRoom,
  deleteBookSoloRoom,
};
