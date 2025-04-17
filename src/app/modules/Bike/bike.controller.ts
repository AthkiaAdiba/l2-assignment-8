import { BikeServices } from "./bike.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Bike added successfully!",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikeFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bikes fetched successfully!",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;

  const result = await BikeServices.getSingleBikeFromDB(bikeId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bike fetched successfully!",
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
};
