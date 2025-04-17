import { NextFunction, Request, Response } from "express";
import handlePrismaError from "../errors/handlePrismaError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = err;

  // Convert Prisma error to AppError
  if (
    err instanceof Error &&
    (err.name.startsWith("Prisma") || err.constructor.name.startsWith("Prisma"))
  ) {
    customError = handlePrismaError(err);
  }

  const statusCode = customError.statusCode || 500;
  const message = customError.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: process.env.NODE_ENV === "development" ? customError.stack : null,
  });
};

export default globalErrorHandler;
