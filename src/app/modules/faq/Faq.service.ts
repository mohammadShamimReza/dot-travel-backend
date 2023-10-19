import { Faq } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createFaq = async (payload: Faq): Promise<Faq> => {
  const result = await prisma.faq.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Faq[]> => {
  const result = await prisma.faq.findMany({});
  return result;
};
const getById = async (id: string): Promise<Faq | null> => {
  const result = await prisma.faq.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateFaq = async (id: string, payload: Partial<Faq>): Promise<Faq> => {
  const result = await prisma.faq.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFaq = async (id: string): Promise<Faq> => {
  const result = await prisma.faq.delete({
    where: {
      id,
    },
  });
  return result;
};

export const FaqService = {
  createFaq,
  getAllFromDb,
  getById,
  updateFaq,
  deleteFaq,
};
