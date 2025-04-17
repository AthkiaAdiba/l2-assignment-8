import { ServiceRecordServices } from "./serviceRecord.service";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

const createServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.createServiceRecordIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Service record created successfully!",
    data: result,
  });
});

const getAllServiceRecords = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.getAllServiceRecordsFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service records fetched successfully!",
    data: result,
  });
});

const getOldPendingOrInProgressServices = catchAsync(async (req, res) => {
  const result =
    await ServiceRecordServices.getOldPendingOrInProgressServicesFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Overdue or pending services fetched successfully!",
    data: result,
  });
});

const getSingleServiceRecord = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await ServiceRecordServices.getSingleServiceRecordFromDB(
    serviceId
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service record fetched successfully!",
    data: result,
  });
});

export const ServiceRecordControllers = {
  createServiceRecord,
  getAllServiceRecords,
  getSingleServiceRecord,
  getOldPendingOrInProgressServices,
};
