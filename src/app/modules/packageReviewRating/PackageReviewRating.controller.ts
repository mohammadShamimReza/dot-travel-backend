import { PackageReviewAndRating } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PackageReviewRatingService } from './PackageReviewRating.service';

const createPackageReviewRating = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result =
      await PackageReviewRatingService.createPackageReviewRating(payload);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PackageReviewRatingService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PackageReviewRatingService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updatePackageReviewRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await PackageReviewRatingService.updatePackageReviewRating(
      id,
      payload,
    );

    sendResponse<PackageReviewAndRating>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User update successfully',
      data: result,
    });
  },
);
const deletePackageReviewRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result =
      await PackageReviewRatingService.deletePackageReviewRating(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User delete successfully',
      data: result,
    });
  },
);

export const PackageReviewRatingController = {
  createPackageReviewRating,
  getAllFromDB,
  getById,
  updatePackageReviewRating,
  deletePackageReviewRating,
};
