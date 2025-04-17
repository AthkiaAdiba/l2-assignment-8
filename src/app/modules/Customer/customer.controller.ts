import { CustomerServices } from "./customer.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomerIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Customer created successfully!",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomersFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customers fetched successfully!",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await CustomerServices.getSingleCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer fetched successfully!",
    data: result,
  });
});

const updateSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await CustomerServices.updateSingleCustomerIntoDB(
    customerId,
    req.body
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer updated successfully!",
    data: result,
  });
});

const deleteSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  await CustomerServices.deleteSingleCustomerIntoDB(customerId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer deleted successfully!",
  });
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
