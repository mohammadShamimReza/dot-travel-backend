import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPackage = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({});
  return result;
};
const getById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updatePackage = async (
  id: string,
  payload: Partial<User>,
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePackage = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
    include: {
      _count: true,
    },
  });
  return result;
};

export const PackageService = {
  createPackage,
  getAllFromDb,
  getById,
  updatePackage,
  deletePackage,
};
