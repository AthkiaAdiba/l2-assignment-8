import { Request, Response } from "express";
import { ServiceRecordServices } from "./serviceRecord.service";

const createServiceRecord = async (req: Request, res: Response) => {
  try {
    const result = await ServiceRecordServices.createServiceRecordIntoDB(
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Service record created successfully!",
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

const getAllServiceRecords = async (req: Request, res: Response) => {
  try {
    const result = await ServiceRecordServices.getAllServiceRecordsFromDB();

    res.status(200).json({
      success: true,
      message: "Service records fetched successfully!",
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

const getOldPendingOrInProgressServices = async (
  req: Request,
  res: Response
) => {
  try {
    const result =
      await ServiceRecordServices.getOldPendingOrInProgressServicesFromDB();
    res.status(200).json({
      success: true,
      message: "Overdue or pending services fetched successfully!",
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

const getSingleServiceRecord = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  try {
    const result = await ServiceRecordServices.getSingleServiceRecordFromDB(
      serviceId
    );

    res.status(200).json({
      success: true,
      message: "Service record fetched successfully!",
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

export const ServiceRecordControllers = {
  createServiceRecord,
  getAllServiceRecords,
  getSingleServiceRecord,
  getOldPendingOrInProgressServices,
};
