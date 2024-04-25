import { Package } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { PackageService } from './Package.service';
import {
  packageFilterableFields,
  packageSearchableFields,
} from './package.constant';

const createPackage = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await PackageService.createPackage(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, packageFilterableFields);
  const paginationOptions = pick(req.query, packageSearchableFields);
  const result = await PackageService.getAllFromDb(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PackageService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package fetched successfully',
    data: result,
  });
});

const updatePackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await PackageService.updatePackage(id, payload);

  sendResponse<Package>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package update successfully',
    data: result,
  });
});
const deletePackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PackageService.deletePackage(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package delete successfully',
    data: result,
  });
});

export const PackageController = {
  createPackage,
  getAllFromDB,
  getById,
  updatePackage,
  deletePackage,
};
