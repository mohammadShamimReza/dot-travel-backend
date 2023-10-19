import { Package, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { packageSearchableFields } from './package.constant';
import { IPackageFilters } from './package.interface';

const createPackage = async (payload: Package): Promise<Package> => {
  const result = await prisma.package.create({ data: payload });
  return result;
};

const getAllFromDb = async (
  filters: IPackageFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<Package[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);
  paginationHelpers.calculatePagination(paginationOptions);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: packageSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        return {
          [key]: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            equals: (filterData as any)[key],
          },
        };
      }),
    });
  }
  const whereConditions: Prisma.PackageWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.package.findMany({
    include: {
      bookedPackage: true,
      packageReviewAndRating: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      paginationOptions.sortBy && paginationOptions.sortOrder
        ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
        : {
            price: 'desc',
          },
  });
  const total = await prisma.package.count({
    where: whereConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getById = async (id: string): Promise<Package | null> => {
  const result = await prisma.package.findUnique({
    where: {
      id,
    },
    include: {
      bookedPackage: true,
      packageReviewAndRating: true,
      addToCartPackage: true,
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
