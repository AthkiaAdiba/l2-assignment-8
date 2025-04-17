import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.createBikeIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "Bike added successfully!",
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

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.getAllBikeFromDB();

    res.status(200).json({
      success: true,
      message: "Bikes fetched successfully!",
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

const getSingleBike = async (req: Request, res: Response) => {
  const { bikeId } = req.params;

  try {
    const result = await BikeServices.getSingleBikeFromDB(bikeId);

    res.status(201).json({
      success: true,
      message: "Bike fetched successfully!",
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

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
};
