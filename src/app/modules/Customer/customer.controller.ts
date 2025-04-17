import { Request, Response } from "express";
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

  // res.status(201).json({
  //   success: true,
  //   message: "Customer created successfully!",
  //   data: result,
  // });
});

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const result = await CustomerServices.getAllCustomersFromDB();

    res.status(201).json({
      success: true,
      message: "Customers fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || "Something went wrong!",
      data: err,
    });
  }
};

const getSingleCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const result = await CustomerServices.getSingleCustomerFromDB(customerId);

    res.status(200).json({
      success: true,
      message: "Customer fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || "Something went wrong!",
      data: err,
    });
  }
};

const updateSingleCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const result = await CustomerServices.updateSingleCustomerIntoDB(
      customerId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Customer updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || "Something went wrong!",
      data: err,
    });
  }
};

const deleteSingleCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    await CustomerServices.deleteSingleCustomerIntoDB(customerId);

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || "Something went wrong!",
      data: err,
    });
  }
};

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
