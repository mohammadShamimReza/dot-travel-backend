import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';


const createUser = async (payload: User): Promise<User> => {
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

const updateUser = async (
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

const deleteUser = async (id: string): Promise<User> => {
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

export const UserService = {
  createUser,
  getAllFromDb,
  getById,
  updateUser,
  deleteUser,
};
