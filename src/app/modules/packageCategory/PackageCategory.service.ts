import { PackageCategory } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPackageCategory = async (
  payload: PackageCategory,
): Promise<PackageCategory> => {
  const result = await prisma.packageCategory.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<PackageCategory[]> => {
  const result = await prisma.packageCategory.findMany({});
  return result;
};
const getById = async (id: string): Promise<PackageCategory | null> => {
  const result = await prisma.packageCategory.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updatePackageCategory = async (
  id: string,
  payload: Partial<PackageCategory>,
): Promise<PackageCategory> => {
  const result = await prisma.packageCategory.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePackageCategory = async (id: string): Promise<PackageCategory> => {
  const result = await prisma.packageCategory.delete({
    where: {
      id,
    },
    include: {
      _count: true,
    },
  });
  return result;
};

export const PackageCategoryService = {
  createPackageCategory,
  getAllFromDb,
  getById,
  updatePackageCategory,
  deletePackageCategory,
};
