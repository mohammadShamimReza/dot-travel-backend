import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AddToCartPackageService } from './AddToCartPackage.service';

const createAddToCartPackage = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result =
      await AddToCartPackageService.createAddToCartPackage(payload);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.query.userId;
  const result = await AddToCartPackageService.getAllFromDb(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
});

const deleteAddToCartPackage = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AddToCartPackageService.deleteAddToCartPackage(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AddToCartPackage delete successfully',
      data: result,
    });
  },
);

export const AddToCartPackageController = {
  createAddToCartPackage,
  getAllFromDB,
  deleteAddToCartPackage,
};
