import { PackageReviewAndRating } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPackageReviewRating = async (
  payload: PackageReviewAndRating,
): Promise<PackageReviewAndRating> => {
  const result = await prisma.packageReviewAndRating.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<PackageReviewAndRating[]> => {
  const result = await prisma.packageReviewAndRating.findMany({
    include: {
      user: true,
    },
  });
  return result;
};
const getById = async (id: string): Promise<PackageReviewAndRating | null> => {
  const result = await prisma.packageReviewAndRating.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updatePackageReviewRating = async (
  id: string,
  payload: Partial<PackageReviewAndRating>,
): Promise<PackageReviewAndRating> => {
  const result = await prisma.packageReviewAndRating.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePackageReviewRating = async (
  id: string,
): Promise<PackageReviewAndRating> => {
  const result = await prisma.packageReviewAndRating.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PackageReviewRatingService = {
  createPackageReviewRating,
  getAllFromDb,
  getById,
  updatePackageReviewRating,
  deletePackageReviewRating,
};
