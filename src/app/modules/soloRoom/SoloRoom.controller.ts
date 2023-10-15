import { SoloRoom } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SoloRoomService } from './SoloRoom.service';

const createPackage = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await SoloRoomService.createSoloRoom(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SoloRoomService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SoloRoomService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updatePackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await SoloRoomService.updateSoloRoom(id, payload);

  sendResponse<SoloRoom>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User update successfully',
    data: result,
  });
});
const deletePackage = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await SoloRoomService.deleteSoloRoom(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User delete successfully',
    data: result,
  });
});

export const SoloRoomController = {
  createPackage,
  getAllFromDB,
  getById,
  updatePackage,
  deletePackage,
};
