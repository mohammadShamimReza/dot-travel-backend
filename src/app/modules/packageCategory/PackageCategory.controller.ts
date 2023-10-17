import { PackageCategory } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PackageCategoryService } from './PackageCategory.service';

const createPackageCategory = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    console.log(payload);
    const result = await PackageCategoryService.createPackageCategory(payload);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package Category created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PackageCategoryService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package Category fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PackageCategoryService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package Category fetched successfully',
    data: result,
  });
});

const updatePackageCategory = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await PackageCategoryService.updatePackageCategory(
      id,
      payload,
    );

    sendResponse<PackageCategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package Category update successfully',
      data: result,
    });
  },
);
const deletePackageCategory = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PackageCategoryService.deletePackageCategory(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package Category delete successfully',
      data: result,
    });
  },
);

export const PackageCategoryController = {
  createPackageCategory,
  getAllFromDB,
  getById,
  updatePackageCategory,
  deletePackageCategory,
};
