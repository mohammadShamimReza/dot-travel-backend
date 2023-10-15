import { BookedSoloRoom } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookedSoloRoomService } from './BookSoloRoom.service';

const createBookSoloRoom = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await BookedSoloRoomService.createBookSoloRoom(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookedSoloRoomService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookedSoloRoomService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateBookSoloRoom = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await BookedSoloRoomService.updateBookSoloRoom(id, payload);

  sendResponse<BookedSoloRoom>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User update successfully',
    data: result,
  });
});
const deleteBookSoloRoom = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookedSoloRoomService.deleteBookSoloRoom(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User delete successfully',
    data: result,
  });
});

export const BookSoloRoomController = {
  createBookSoloRoom,
  getAllFromDB,
  getById,
  updateBookSoloRoom,
  deleteBookSoloRoom,
};
