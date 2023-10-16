import { BookedPackage } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookPackageService } from './BookPackage.service';

const createBookPackage = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await BookPackageService.createBookPackage(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookPackageService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookPackageService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateBookPackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await BookPackageService.updateBookPackage(id, payload);

  sendResponse<BookedPackage>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User update successfully',
    data: result,
  });
});
const deleteBookPackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookPackageService.deleteBookPackage(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User delete successfully',
    data: result,
  });
});

export const BookPackageController = {
  createBookPackage,
  getAllFromDB,
  getById,
  updateBookPackage,
  deleteBookPackage,
};
