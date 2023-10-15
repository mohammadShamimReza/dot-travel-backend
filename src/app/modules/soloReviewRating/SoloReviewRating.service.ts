import { SoloReviewAndRating } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createSoloReviewAndRating = async (
  payload: SoloReviewAndRating,
): Promise<SoloReviewAndRating> => {
  const result = await prisma.soloReviewAndRating.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<SoloReviewAndRating[]> => {
  const result = await prisma.soloReviewAndRating.findMany({});
  return result;
};
const getById = async (id: string): Promise<SoloReviewAndRating | null> => {
  const result = await prisma.soloReviewAndRating.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateSoloReviewAndRating = async (
  id: string,
  payload: Partial<SoloReviewAndRating>,
): Promise<SoloReviewAndRating> => {
  const result = await prisma.soloReviewAndRating.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteSoloReviewAndRating = async (
  id: string,
): Promise<SoloReviewAndRating> => {
  const result = await prisma.soloReviewAndRating.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SoloReviewAndRatingService = {
  createSoloReviewAndRating,
  getAllFromDb,
  getById,
  updateSoloReviewAndRating,
  deleteSoloReviewAndRating,
};
