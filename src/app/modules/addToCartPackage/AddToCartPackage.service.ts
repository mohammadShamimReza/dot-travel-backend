import { AddToCartPackage } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAddToCartPackage = async (
  payload: AddToCartPackage,
): Promise<AddToCartPackage> => {
  const result = await prisma.addToCartPackage.create({ data: payload });
  return result;
};

const getAllFromDb = async (id: string): Promise<AddToCartPackage[]> => {
  const result = await prisma.addToCartPackage.findMany({
    where: {
      userId: id,
    },
    include: {
      package: true,
    },
  });
  return result;
};

const deleteAddToCartPackage = async (
  id: string,
): Promise<AddToCartPackage> => {
  const result = await prisma.addToCartPackage.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AddToCartPackageService = {
  createAddToCartPackage,
  getAllFromDb,
  deleteAddToCartPackage,
};
