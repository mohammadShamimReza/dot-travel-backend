import { SoloReviewAndRating } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SoloReviewAndRatingService } from './SoloReviewRating.service';

const createReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;

    const result =
      await SoloReviewAndRatingService.createSoloReviewAndRating(payload);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SoloReviewAndRatingService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SoloReviewAndRatingService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await SoloReviewAndRatingService.updateSoloReviewAndRating(
      id,
      payload,
    );

    sendResponse<SoloReviewAndRating>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User update successfully',
      data: result,
    });
  },
);
const deleteReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result =
      await SoloReviewAndRatingService.deleteSoloReviewAndRating(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User delete successfully',
      data: result,
    });
  },
);

export const SoloReviewAndRatingController = {
  createReviewAndRating,
  getAllFromDB,
  getById,
  updateReviewAndRating,
  deleteReviewAndRating,
};
