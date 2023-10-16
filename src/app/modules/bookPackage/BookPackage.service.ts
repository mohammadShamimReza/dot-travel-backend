import { BookedPackage } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBookPackage = async (
  payload: BookedPackage,
): Promise<BookedPackage> => {
  const result = await prisma.bookedPackage.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<BookedPackage[]> => {
  const result = await prisma.bookedPackage.findMany({
    include: {
      package: true,
      user: true,
    },
  });
  return result;
};
const getById = async (id: string): Promise<BookedPackage | null> => {
  const result = await prisma.bookedPackage.findUnique({
    where: {
      id,
    },
    include: {
      package: true,
      user: true,
    },
  });
  return result;
};

const updateBookPackage = async (
  id: string,
  payload: Partial<BookedPackage>,
): Promise<BookedPackage> => {
  const result = await prisma.bookedPackage.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteBookPackage = async (id: string): Promise<BookedPackage> => {
  const result = await prisma.bookedPackage.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookPackageService = {
  createBookPackage,
  getAllFromDb,
  getById,
  updateBookPackage,
  deleteBookPackage,
};
