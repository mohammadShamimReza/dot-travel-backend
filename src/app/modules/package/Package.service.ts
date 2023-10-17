import { Package } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPackage = async (payload: Package): Promise<Package> => {
  const result = await prisma.package.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Package[]> => {
  const result = await prisma.package.findMany({});
  return result;
};
const getById = async (id: string): Promise<Package | null> => {
  const result = await prisma.package.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updatePackage = async (
  id: string,
  payload: Partial<Package>,
): Promise<Package> => {
  const result = await prisma.package.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePackage = async (id: string): Promise<Package> => {
  const result = await prisma.package.delete({
    where: {
      id,
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
