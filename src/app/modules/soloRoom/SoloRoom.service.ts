import { SoloRoom } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createSoloRoom = async (payload: SoloRoom): Promise<SoloRoom> => {
  const result = await prisma.soloRoom.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<SoloRoom[]> => {
  const result = await prisma.soloRoom.findMany({});
  return result;
};
const getById = async (id: string): Promise<SoloRoom | null> => {
  const result = await prisma.soloRoom.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateSoloRoom = async (
  id: string,
  payload: Partial<SoloRoom>,
): Promise<SoloRoom> => {
  const result = await prisma.soloRoom.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteSoloRoom = async (id: string): Promise<SoloRoom> => {
  const result = await prisma.soloRoom.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SoloRoomService = {
  createSoloRoom,
  getAllFromDb,
  getById,
  updateSoloRoom,
  deleteSoloRoom,
};
