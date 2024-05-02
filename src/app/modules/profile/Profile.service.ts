import { Customer } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getProfile = async (
  email: string,
  password: string,
): Promise<Customer> => {
  const result = await prisma.customer.findFirst({
    where: {
      email,
      password,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'user not found');
  }

  return result;
};

export const ProfileService = {
  getProfile,
};
